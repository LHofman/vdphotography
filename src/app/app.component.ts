import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vdphotography';
  flashMessage: {className: string, message: string};

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alertChanged.subscribe((flashmessage) => {
      this.flashMessage = flashmessage;
    })
  }
}
