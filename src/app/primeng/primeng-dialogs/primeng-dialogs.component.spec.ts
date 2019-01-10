import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDialogsComponent } from './primeng-dialogs.component';

describe('PrimengDialogsComponent', () => {
  let component: PrimengDialogsComponent;
  let fixture: ComponentFixture<PrimengDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
