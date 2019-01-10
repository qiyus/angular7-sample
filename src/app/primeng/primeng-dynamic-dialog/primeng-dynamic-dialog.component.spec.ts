import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDynamicDialogComponent } from './primeng-dynamic-dialog.component';

describe('PrimengDynamicDialogComponent', () => {
  let component: PrimengDynamicDialogComponent;
  let fixture: ComponentFixture<PrimengDynamicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDynamicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDynamicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
