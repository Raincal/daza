import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
@Component({
  selector: 'app-spinner',
  'template': `
    <md-progress-spinner class="app-spinner" *ngIf="active" mode="indeterminate" color="primary"></md-progress-spinner>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  public active: boolean;

  public constructor(spinner: SpinnerService) {
    spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }
}
