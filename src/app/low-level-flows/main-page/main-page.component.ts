import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { Post, Main } from 'src/app/globalInterfaces';
import { takeUntil } from 'rxjs/operators';

/**
 * - базова компонента модулю що описує методи передачі данних нижнього рівня
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  /**
   * перелік підписок на спостерігачі що подлягає ануляції при завершені роботи компоненти
   */
  private unsubscribe$ = new Subject<void>();

  constructor(
    public service: GlobalService
  ) { }
  /**
   * перелік постів для статичного виводу в шаблон
   */
  posts: Post[] = [
    { title: 'Some titile 1', text: 'Some text 1', id: 1 },
    { title: 'Some titile 2', text: 'Some titile 2', id: 2 }
  ];
  /**
   * умовно статичні данні про користувача, властивість об'єкту timeStamp - отримується асинхронноб
   * дані у формі об'єкту передаються через шаблон в дочірню компоненту
   */
  mainInfo: Main;
  /**
   * - джерело данних у форматі sring для передачі через шаблон у дочірню кмпоненту з подальшою реєстрацією
   * у методі життєвого циклу ngOnChanges
   */
  simpleData: string;

  /**
   * властивість призначена для передачі через сетер дочірньої компоненти з обробкою
   */
  staticCode = 'asdf1234ghjk';

  /**
   * визначення статичних данних для передачі через шаблон у дочірню компоненту
   */

  title = 'Low level data flows';
  ngOnInit(): void {
    this.mainInfo = {
      user: 'John',
      id: 1,
      role: 'admin'
    };

    this.service.outgoingStream.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (data) => {
        this.mainInfo.timeStamp = data.date;
        console.log(data, this.mainInfo);
      }
    );
  }



  stopPulsar() {
    this.service.stopPuls();
  }

  startPulsar() {
    this.service.startPuls();
  }

  changeSimpleData() {
    this.simpleData = Date.now().toString();
    console.log(this.simpleData);
  }

  updatePosts(e) {
    this.posts.unshift(Object.assign({}, e));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
