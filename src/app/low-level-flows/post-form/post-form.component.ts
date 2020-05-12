import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Main } from '../../globalInterfaces';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {
  @Input() userInfo: Main;
  @Input() stringData: string;
  insadeDatefromOnCahnge: any;
  onChangesCount = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let change = changes[propName];
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);
        console.log({ change, current, previous });
        this.onChangesCount += 1;
        if (!!current && change.currentValue.hasOwnProperty('timeStamp')) {
          this.insadeDatefromOnCahnge = change.currentValue.timeStamp;
        }
      }
    }
  }

}
