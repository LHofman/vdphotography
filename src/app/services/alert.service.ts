import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertChanged = new EventEmitter<{className: string, message: string}>();

  /**
   * Adds a success alert to the stack
   */
  flashSuccess(message: string) {
    this.flashAlert('alert-success', message);
  }

  /**
   * Adds a info alert to the stack
   */
  flashInfo(message: string) {
    this.flashAlert('alert-info', message);
  }

  /**
   * Adds a warning alert to the stack
   */
  flashWarning(message: string) {
    this.flashAlert('alert-warning', message);
  }

  /**
   * Adds a danger alert to the stack
   */
  flashError(message: string) {
    this.flashAlert('alert-danger', message);
  }

  /**
   * Adds an alert to the stack
   */
  private flashAlert(className: string, message: string) {
    this.alertChanged.emit({ className, message });
  }

  constructor() { }
}
