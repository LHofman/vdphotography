import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vdphotography';
  flashMessages: {id: number, flashMessage: { className: string, message: string } }[] = [];

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscribeToAlerts();
  }

  private subscribeToAlerts() {
    this.alertService.alertChanged.subscribe(
      (flashMessage: { className: string, message: string }) => {
        const flashMessageId = this.flashMessages.reduce((acc, flashMessage) =>
          Math.max(acc, flashMessage.id), 0
        ) + 1;

        this.flashMessages.unshift({ id: flashMessageId, flashMessage });
        
        setTimeout(() => {
          const index = this.flashMessages.lastIndexOf(
            this.flashMessages.filter((flashMessage) => flashMessage.id === flashMessageId)[0]
          );
          this.flashMessages.splice(index, 1);
        }, 5000);
      }
    );
  }
}