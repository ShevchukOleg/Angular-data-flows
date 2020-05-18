import { Injectable } from '@angular/core';
import { Subscription, interval, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  pulsar: Subscription;

  private dataSource = new BehaviorSubject({ puls: 0, date: new Date() });
  outgoingStream = this.dataSource.asObservable();

  constructor() {
  }

  startPuls() {
    const intervalStream$ = interval(1000);
    this.pulsar = intervalStream$.subscribe(
      (puls) => {
        console.log('Pulsar works');
        this.dataSource.next({ puls, date: new Date() });
      }
    );
  }

  stopPuls() {
    if (this.pulsar) {
      this.pulsar.unsubscribe();
      console.log('Pulsar stoped');
    }
  }
}
