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
    // зміна поля об'єкту без активації зайвих циклів у дочірній компоненті
    this.service.outgoingStream.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (data) => {
        this.mainInfo.timeStamp = data.date;
        console.log(data, this.mainInfo);
      }
    );
  }
  /**
   * активція методу головного червісу на регуляоне оновлення даних
   */
  stopPulsar() {
    this.service.stopPuls();
  }
  // зупинка роботи методу асинхронної регулрної видачі даних
  startPulsar() {
    this.service.startPuls();
  }

  changeSimpleData() {
    this.simpleData = Date.now().toString();
    console.log(this.simpleData);
  }
  /**
   * метод зміни валастивості timeStamp основного об'єкту mainInfo у компоненті вищого рівня
   * *при простій зміні властивості об'єкту що передається в дочірню компоненту не српацює активація методу OnChanges
   * *при зміні посилання на весь передаваємий об'єкт метод OnChanges - спарцює
   * @param param - опцыя ипу модифыкації
   */
  changeUserTimestamp(param: string) {
    switch (param) {
      case 'obj':
        const user = Object.assign({}, this.mainInfo);
        user.timeStamp = new Date();
        this.mainInfo = Object.assign({}, user);
        break;
      case 'prop':
        console.log(this.mainInfo);
        this.mainInfo.timeStamp = new Date();
        break;
    }
  }

  updatePosts(e) {
    this.posts.unshift(Object.assign({}, e));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
