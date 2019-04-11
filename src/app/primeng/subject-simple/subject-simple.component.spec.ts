import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSimpleComponent } from './subject-simple.component';

describe('SubjectSimpleComponent', () => {
  let component: SubjectSimpleComponent;
  let fixture: ComponentFixture<SubjectSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
