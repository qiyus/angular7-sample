import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengMainComponent } from './primeng-main.component';

describe('PrimengTestComponent', () => {
  let component: PrimengMainComponent;
  let fixture: ComponentFixture<PrimengMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
