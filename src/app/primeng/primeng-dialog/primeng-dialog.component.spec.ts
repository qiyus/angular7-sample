import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDialogComponent } from './primeng-dialog.component';

describe('PrimengDialogComponent', () => {
  let component: PrimengDialogComponent;
  let fixture: ComponentFixture<PrimengDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
