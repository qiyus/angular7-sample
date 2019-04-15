import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSignComponent } from './board-sign.component';

describe('BoardSignComponent', () => {
  let component: BoardSignComponent;
  let fixture: ComponentFixture<BoardSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
