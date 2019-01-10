import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-tab-view',
  templateUrl: './primeng-tab-view.component.html',
  styleUrls: ['./primeng-tab-view.component.css']
})
export class PrimengTabViewComponent implements OnInit {

  index: number;
  constructor() { }

  ngOnInit() {
    this.index = 1;
  }

  onChange(event) {
    switch (event.index) {
      case 0:
      case 1:
    }
  }
}
