import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Main, Post } from '../../globalInterfaces';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {

  @Output() createPost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() parentTitleChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() parentTitle: string;
  @Input() userInfo: Main;
  /**
   * зміна мені вхідної властивості (оскільки до неї не існувало аналогічних переіменовування недоцільне)
   */
  @Input('stringData') simpleData: string;

  /**
   * отримання данних через сетер та модифікацію
   * з подальшим записом до приватної властивості
   */
  private _postModify: string;
  @Input() set preModify(code: string) {
    if (code.length >= 3 && code.length < 10) {
      this._postModify = code.toUpperCase();
    } else if (code.length >= 10) {
      this._postModify = code;
    } else {
      this._postModify = 'default';
    }
  }

  insadeDatefromOnCahnge: any;
  onChangesCount = 0;

  newPost = {
    title: '',
    text: ''
  };

  constructor() { }

  ngOnInit() {
    console.log(
      this._postModify
    );
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

  addPost() {
    if (this.newPost.title.trim() && this.newPost.text.trim()) {
      const post: Post = {
        title: this.newPost.title,
        text: this.newPost.text
      };
      console.log(post);
      this.createPost.emit(post);
      this.newPost.title = this.newPost.text = '';
    }
  }

  immediateDataUpdate(event) {
    console.log(event);
  }

  onTitleChange(value: string) {
    this.parentTitle = value;
    console.log(this.parentTitle);
    this.parentTitleChange.emit(value);
  }

  get code() {
    return this._postModify;
  }
}
