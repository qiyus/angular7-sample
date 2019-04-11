import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Car} from '../domian/car';
import {DialogExtensionDirective} from '../dialog-extension.directive';

@Component({
  selector: 'app-primeng-dialog',
  templateUrl: './primeng-dialog.component.html',
  styleUrls: ['./primeng-dialog.component.css']
})
export class PrimengDialogComponent implements OnInit {

  @Output() callBack = new EventEmitter<Car>();
  @ViewChild(DialogExtensionDirective) dialog: DialogExtensionDirective;

  car: Car;

  display = false;

  constructor() {
  }

  ngOnInit() {
    this.display = true;
    this.dialog.onResize.subscribe((delta) => {
      console.log(delta);
    });
  }

  setParameter(car: Car) {
    this.car = car;
  }

  hideVin() {
    this.display = false;
    this.callBack.emit(this.car);
  }
}
