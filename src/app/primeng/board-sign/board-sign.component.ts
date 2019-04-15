import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-sign',
  templateUrl: './board-sign.component.html',
  styleUrls: ['./board-sign.component.css']
})
export class BoardSignComponent implements OnInit {

  variety = 'sign';

  constructor() { }

  ngOnInit() {
  }

  forgot(): void {
    this.variety = 'reset';
    return false;
  }

}
