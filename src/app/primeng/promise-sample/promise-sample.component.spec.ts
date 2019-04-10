import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseSampleComponent } from './promise-sample.component';

describe('PromiseSampleComponent', () => {
  let component: PromiseSampleComponent;
  let fixture: ComponentFixture<PromiseSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
