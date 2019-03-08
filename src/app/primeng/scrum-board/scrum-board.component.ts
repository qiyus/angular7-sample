import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() { }

  ngOnInit() {
  }

}
