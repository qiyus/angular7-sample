import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengFileUploadComponent } from './primeng-file-upload.component';

describe('PrimengFileUploadComponent', () => {
  let component: PrimengFileUploadComponent;
  let fixture: ComponentFixture<PrimengFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
