import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Params, Router, ActivatedRoute } from '@angular/router';

import { AlertService } from 'src/app/services/alert.service';
import { PictureService } from 'src/app/services/picture.service';

import { Picture } from '../picture';

@Component({
  selector: 'app-picture-edit',
  templateUrl: './picture-edit.component.html',
  styleUrls: ['./picture-edit.component.css']
})
export class PictureEditComponent implements OnInit {
  picture: Picture;
  isLoaded: boolean = false;
  editPictureForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
    this.subscribeToUrlParamChanges();
  }

  onSubmit() {
    if (this.editPictureForm.invalid) {
      this.alertService.flashError('Form is invalid, Picture is not updated');
      return;
    }

    const formData = this.editPictureForm.value;

    //Update album object
    this.picture.title = formData.basicPictureData.title;

    const pictureUpdated = this.pictureService.update(this.picture.id, this.picture);
    if (!pictureUpdated) {
      return;
    }

    this.alertService.flashSuccess('Picture succesfully updated');

    //Redirect back to edit albums page
    this.router.navigate(['/admin', 'pictures', 'edit']);
  }

  reset() {
    this.initForm();
  }

  delete() {
    const confirmation = confirm('Are you sure you want to delete this picture?');
    if (!confirmation) {
      return;
    }

    //Delete album in service
    const pictureDeleted = this.pictureService.deletePicture(this.picture.id);
    if (!pictureDeleted) {
      return;
    }

    this.alertService.flashSuccess('Picture succesfully deleted');

    //Redirect back to edit albums page
    this.router.navigate(['/admin', 'pictures', 'edit']);
  }

  /**
   * Checks for changes in the album before navigating away
   */
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.picture.title === this.editPictureForm.value.basicAlbumData.title) {
      return true;
    }

    return confirm('Do you want to discard the changes?');
  }

  /**
   * Observes changes to the url params
   */
  private subscribeToUrlParamChanges() {
    this.route.params.subscribe((params: Params) => {
      //Execute in a different thread to make sure isLoaded is correctly provided in the structural directive
      setTimeout(() => {
        this.isLoaded = false;

        //Finds album by id
        const picture = this.pictureService.getPicture(+params['id']);

        //Redirects to the homepage when the album with the provided id is not found 
        if (!picture) {
          this.alertService.flashError(`Picture with id ${params['id']} not found`);
          this.router.navigate(['/']);
        }

        this.picture = picture;

        this.initForm();

        this.isLoaded = true;
      });
    });
  }

  /**
   * Initializes the editAlbumForm
   */
  private initForm() {
    this.editPictureForm = new FormGroup({
      'basicPictureData': new FormGroup({
        'title': new FormControl(this.picture.title, [Validators.required, Validators.minLength(3)])
      })
    });
  }

}
