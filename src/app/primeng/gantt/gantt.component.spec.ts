import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gantt } from './gantt.component';

describe('Gantt', () => {
  let component: Gantt;
  let fixture: ComponentFixture<Gantt>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gantt ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gantt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
