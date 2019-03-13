import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-task-card-box',
  templateUrl: './task-card-box.component.html',
  styleUrls: ['./task-card-box.component.css']
})
export class TaskCardBoxComponent implements OnInit, OnChanges {

  @Input()
  title = '';
  @Input()
  boxHeight: number;
  @Input()
  cards = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.boxHeight) {
      this.boxHeight = changes.boxHeight.currentValue;
    }
  }
}
