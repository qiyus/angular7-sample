import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Car} from '../domian/car';
import {DialogExtensionDirective} from '../dialog-extension.directive';

@Component({
  selector: 'app-primeng-dialog',
  templateUrl: './primeng-dialog.component.html',
  styleUrls: ['./primeng-dialog.component.css']
})

/**
 * Dialog实战。
 */
export class PrimengDialogComponent implements OnInit {

  @Output() callBack = new EventEmitter<Car>();
  @ViewChild(DialogExtensionDirective) dialog: DialogExtensionDirective;

  car: Car;
  display = false;
  pageX = 350;
  pageY = 250;
  title = 'Dialog(350, 250)';

  constructor() {
  }

  ngOnInit() {
    this.display = true;
    this.dialog.onResize.subscribe((delta) => {
      this.pageX += delta.x;
      this.pageY += delta.y;
      this.title = `Dialog(${this.pageX}, ${this.pageY})`;
    });
  }

  /**
   * 设置被编辑情报
   * @param car 车辆信息。
   */
  setParameter(car: Car) {
    this.car = car;
  }

  /**
   * 通知父组件车辆信息变更。
   */
  hideVin() {
    this.display = false;
    this.callBack.emit(this.car);
  }
}
