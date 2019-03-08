import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardBoxComponent } from './task-card-box.component';

describe('TaskCardBoxComponent', () => {
  let component: TaskCardBoxComponent;
  let fixture: ComponentFixture<TaskCardBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
