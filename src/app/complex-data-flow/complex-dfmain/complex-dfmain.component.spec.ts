import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexDFMainComponent } from './complex-dfmain.component';

describe('ComplexDFMainComponent', () => {
  let component: ComplexDFMainComponent;
  let fixture: ComponentFixture<ComplexDFMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexDFMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexDFMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
