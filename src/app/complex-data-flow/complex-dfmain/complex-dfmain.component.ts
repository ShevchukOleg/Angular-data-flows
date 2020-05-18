import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-dfmain',
  templateUrl: './complex-dfmain.component.html',
  styleUrls: ['./complex-dfmain.component.scss']
})
export class ComplexDFMainComponent implements OnInit {
  /**
   * параметр розміру шрифту для директиви управління параграфом
   */
  specialElementSize = 16;
  /**
   * статрові параметри межі об'єкта
   */
  borderParams = {
    borderRadius: 2,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#22ce5e'
  };

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * метод для курування шрифту параграфу
   * @param size - розмір шрифту
   */
  changeSize(size: number) {
    this.specialElementSize = size;
  }

}
