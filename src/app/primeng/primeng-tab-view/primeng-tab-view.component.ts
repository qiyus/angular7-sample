import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-primeng-tab-view',
  templateUrl: './primeng-tab-view.component.html',
  styleUrls: ['./primeng-tab-view.component.css']
})
export class PrimengTabViewComponent implements OnInit {

  index: number;
  cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() {
  }

  ngOnInit() {
    this.index = 0;
  }

}
