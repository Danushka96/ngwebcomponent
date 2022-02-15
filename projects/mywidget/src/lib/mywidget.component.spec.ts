import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywidgetComponent } from './mywidget.component';

describe('MywidgetComponent', () => {
  let component: MywidgetComponent;
  let fixture: ComponentFixture<MywidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MywidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MywidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
