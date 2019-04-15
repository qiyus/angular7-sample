import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengPickListComponent } from './primeng-pick-list.component';

describe('PrimengPickListComponent', () => {
  let component: PrimengPickListComponent;
  let fixture: ComponentFixture<PrimengPickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengPickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
