import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-burn-down',
  templateUrl: './burn-down.component.html',
  styleUrls: ['./burn-down.component.css']
})
export class BurnDownComponent implements OnInit {

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [
        {
          label: 'Ideal',
          data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        },
        {
          label: 'Actual',
          data: [10, 9, 7, 6, 4, 3, 2, 1]
        }
      ]
    };

    this.options = {
      title: {
        display: true,
        text: 'Sprint 2',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit() {
  }

}
