import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from '../car';

@Component({
  selector: 'app-primeng-dialog',
  templateUrl: './primeng-dialog.component.html',
  styleUrls: ['./primeng-dialog.component.css']
})
export class PrimengDialogComponent implements OnInit {

  @Output() callBack = new EventEmitter<Car>();

  car: Car;

  display = false;

  constructor() {
  }

  ngOnInit() {
    this.display = true;
  }

  setParameter(car: Car) {
    this.car = car;
  }

  hideVin() {
    this.display = false;
    this.callBack.emit(this.car);
  }
}
