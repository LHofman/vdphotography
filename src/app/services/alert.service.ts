import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertChanged = new EventEmitter<{className: string, message: string}>();

  flashSuccess(message: string) {
    this.flashAlert('alert-success', message);
  }

  flashInfo(message: string) {
    this.flashAlert('alert-info', message);
  }

  flashWarning(message: string) {
    this.flashAlert('alert-warning', message);
  }

  flashError(message: string) {
    this.flashAlert('alert-danger', message);
  }

  private flashAlert(className: string, message: string) {
    this.alertChanged.emit({ className, message });
  }

  constructor() { }
}
