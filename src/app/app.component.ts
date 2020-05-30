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

  /**
   * Observes alertChanged event and handles the displaying of the alerts
   */
  private subscribeToAlerts() {
    this.alertService.alertChanged.subscribe(
      (flashMessage: { className: string, message: string }) => {
        //Calculate id (1 more than current max)
        const flashMessageId = this.flashMessages.reduce((acc, flashMessage) =>
          Math.max(acc, flashMessage.id), 0
        ) + 1;

        //Adds flash to the from of the array
        this.flashMessages.unshift({ id: flashMessageId, flashMessage });
        
        //Removes flash message automatically after 5s
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