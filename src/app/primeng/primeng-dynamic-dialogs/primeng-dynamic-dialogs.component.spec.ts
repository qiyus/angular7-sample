import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDynamicDialogsComponent } from './primeng-dynamic-dialogs.component';

describe('PrimengDynamicDialogsComponent', () => {
  let component: PrimengDynamicDialogsComponent;
  let fixture: ComponentFixture<PrimengDynamicDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDynamicDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDynamicDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
