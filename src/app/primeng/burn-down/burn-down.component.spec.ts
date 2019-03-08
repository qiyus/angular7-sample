import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnDownComponent } from './burn-down.component';

describe('BurnDownComponent', () => {
  let component: BurnDownComponent;
  let fixture: ComponentFixture<BurnDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
