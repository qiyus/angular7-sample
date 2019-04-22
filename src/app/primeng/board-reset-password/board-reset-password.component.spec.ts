import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardResetPasswordComponent } from './board-reset-password.component';

describe('BoardResetPasswordComponent', () => {
  let component: BoardResetPasswordComponent;
  let fixture: ComponentFixture<BoardResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
