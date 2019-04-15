import {Component, OnInit} from '@angular/core';
import {PrimeNgDataService} from '../primeng-data.service';

@Component({
  selector: 'app-primeng-pick-list',
  templateUrl: './primeng-pick-list.component.html',
  styleUrls: ['./primeng-pick-list.component.css']
})
export class PrimengPickListComponent implements OnInit {

  list1: any[];

  list2: any[];

  constructor(private dataService: PrimeNgDataService) {
  }

  ngOnInit() {
    this.dataService.getCarsSmall().subscribe((cars) => {
      this.list1 = cars;
    });
    this.list2 = [];
  }
}
