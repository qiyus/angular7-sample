import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-card-box',
  templateUrl: './task-card-box.component.html',
  styleUrls: ['./task-card-box.component.css']
})
export class TaskCardBoxComponent implements OnInit {

  @Input()
  title = '';
  @Input()
  boxHeight = '600px';
  @Input()
  cards = [];

  constructor() {
  }

  ngOnInit() {
  }
}
