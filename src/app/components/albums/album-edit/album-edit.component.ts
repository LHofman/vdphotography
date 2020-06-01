import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CanComponentDeactivate } from 'src/app/routing/guards/interfaces/can-component-deactivate';
import { AlbumService } from 'src/app/services/album.service';
import { AlertService } from 'src/app/services/alert.service';

import { Album } from '../album';
import { Picture } from '../../pictures/picture';
import { removeFromListById, compareLists } from 'src/utils/array-util';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit, CanComponentDeactivate {
  album: Album;
  isLoaded: boolean = false;
  editAlbumForm: FormGroup;
  albumPictures: Picture[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.subscribeToUrlParamChanges();
  }

  onSubmit() {
    if (this.editAlbumForm.invalid) {
      this.alertService.flashError('Form is invalid, Album is not updated');
      return;
    }

    const formData = this.editAlbumForm.value;

    //Update album object
    this.album.title = formData.basicAlbumData.title;
    this.album.pictures = this.albumPictures;

    const albumUpdated = this.albumService.update(this.album.id, this.album);
    if (!albumUpdated) {
      return;
    }

    this.alertService.flashSuccess('Album succesfully updated');

    //Redirect back to edit albums page
    this.router.navigate(['/admin', 'albums', 'edit']);
  }

  reset() {
    this.initForm();
  }

  delete() {
    const confirmation = confirm('Are you sure you want to delete this album?');
    if (!confirmation) {
      return;
    }

    //Delete album in service
    const albumDeleted = this.albumService.deleteAlbum(this.album.id);
    if (!albumDeleted) {
      return;
    }

    this.alertService.flashSuccess('Album succesfully deleted');

    //Redirect back to edit albums page
    this.router.navigate(['/admin', 'albums', 'edit']);
  }

  removePicture(id: number) {
    removeFromListById(this.albumPictures, id, '', this.alertService);
  }

  /**
   * Checks for changes in the album before navigating away
   */
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (
      this.album.title === this.editAlbumForm.value.basicAlbumData.title &&
      compareLists(this.album.pictures, this.albumPictures)
    ) {
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
        const album = this.albumService.getAlbum(+params['id']);

        //Redirects to the homepage when the album with the provided id is not found 
        if (!album) {
          this.alertService.flashError(`Album with id ${params['id']} not found`);
          this.router.navigate(['/']);
        }

        this.album = album;

        this.initForm();

        this.isLoaded = true;
      });
    });
  }

  /**
   * Initializes the editAlbumForm
   */
  private initForm() {
    this.editAlbumForm = new FormGroup({
      'basicAlbumData': new FormGroup({
        'title': new FormControl(this.album.title, [Validators.required, Validators.minLength(3)])
      })
    });

    this.albumPictures = [...this.album.pictures];
  }

}
