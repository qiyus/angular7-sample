import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTerminalComponent } from './primeng-terminal.component';

describe('PrimengTerminalComponent', () => {
  let component: PrimengTerminalComponent;
  let fixture: ComponentFixture<PrimengTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
