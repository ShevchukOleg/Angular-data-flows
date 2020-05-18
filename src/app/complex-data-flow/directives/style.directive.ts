import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})

export class StyleDirective {
  /**
   * Вхідна властивість з шаблону компоненти що йде безпосередньо через атрибут директиви
   */
  @Input('appChangeStyle') directiveParam: string;
  /**
   * Вхідна вдастивість з шаблону компоненти що йде від стороннього атрибут директиви з прив'язкою до властивості калсу компоненти
   */
  @Input() fontSize: number;
  /**
   * Вхідна властивість що керує межою елементу
   */
  @Input() borderLeft: { borderRadius: number, borderWidth: number, borderStyle: string, borderColor: string }
  nativeElement: HTMLElement;
  counter = 0;
  constructor(private elemtnt: ElementRef, private render: Renderer2) {
    // * спрощений синтаксис this.nativeElement = this.elemtnt.nativeElement;

    // this.elemtnt.nativeElement.style.color = 'green';

    this.render.setStyle(this.elemtnt.nativeElement, 'font-size', `${this.fontSize}px`);
  }
  /**
   * декоратор з обробником події наведення курсору
   */
  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
    console.log(this.nativeElement, event, event.target);
    // * спрощений синтаксис: this.nativeElement.style.fontWeight = 'bold';
    this.elemtnt.nativeElement.style.color = this.directiveParam;
    this.toggleElementState(true);
  }
  /**
   * декоратор з обробником при виході курсора з меж елемента
   * @param event - опис події
   */
  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    ++this.counter;
    console.log(event, event.target, this.counter);
    this.elemtnt.nativeElement.style.color = 'black';
    this.toggleElementState(false);
  }
  /**
   * метод зміни властивотей елемету при подіях курсору
   * @param flag - тригер станів
   */
  toggleElementState(flag: boolean) {
    this.render.setStyle(this.elemtnt.nativeElement, 'font-size', `${this.fontSize}px`);
    this.render.setStyle(this.elemtnt.nativeElement, 'border-left', `${this.borderLeft.borderWidth}px ${this.borderLeft.borderStyle} ${this.borderLeft.borderColor}`);
    this.render.setStyle(this.elemtnt.nativeElement, 'border-radius', `${this.borderLeft.borderRadius}px`);
    if (flag) {
      this.render.setStyle(this.elemtnt.nativeElement, 'font-weight', 'bold');
    } else {
      this.render.setStyle(this.elemtnt.nativeElement, 'font-weight', 'normal');
    }
  }
}
