import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';

@Injectable()
export class SpinnerService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  start(): void {
    this.status.next(true);
  }

  stop(): void {
    this.status.next(false);
  }
};
