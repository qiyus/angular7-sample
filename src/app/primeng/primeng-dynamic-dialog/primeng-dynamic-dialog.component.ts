import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from '../domian/car';
import {PrimeNgDataService} from '../primeng-data.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';

@Component({
  selector: 'app-primeng-danymic-dialog',
  templateUrl: './primeng-dynamic-dialog.component.html',
  styleUrls: ['./primeng-dynamic-dialog.component.css']
})
export class PrimengDynamicDialogComponent implements OnInit {

  car: Car;

  display = false;

  constructor(private dataService: PrimeNgDataService,
              private ref: DynamicDialogRef,
              private config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.display = true;
    this.car = this.config.data.car;
  }

  hideVin() {
    this.ref.close(this.car);
  }

  cancel() {
    this.ref.close();
  }
}
