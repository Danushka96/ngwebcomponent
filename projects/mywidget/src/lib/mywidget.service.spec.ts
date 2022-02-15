import { TestBed } from '@angular/core/testing';

import { MywidgetService } from './mywidget.service';

describe('MywidgetService', () => {
  let service: MywidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MywidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
