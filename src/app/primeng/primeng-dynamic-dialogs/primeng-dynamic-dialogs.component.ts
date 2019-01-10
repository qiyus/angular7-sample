import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {Car} from '../car';
import {PrimeNgDataService} from '../primeng-data.service';
import {PrimengDynamicDialogComponent} from '../primeng-dynamic-dialog/primeng-dynamic-dialog.component';
import {DialogService} from 'primeng/api';

@Component({
  selector: 'app-primeng-dynamic-dialogs',
  templateUrl: './primeng-dynamic-dialogs.component.html',
  styleUrls: ['./primeng-dynamic-dialogs.component.css'],
  providers: [DialogService]
})
export class PrimengDynamicDialogsComponent implements OnInit {

  @ViewChild('carDetail', {read: ViewContainerRef}) container: ViewContainerRef;

  cars: Car[];

  cols: any[];

  constructor(private dataService: PrimeNgDataService,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.dataService.getCarsSmall().subscribe((cars) => {
      this.cars = cars;
    });

    this.cols = [
      {field: 'operation', header: 'Operation'},
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

  show(car: Car) {
    const ref = this.dialogService.open(PrimengDynamicDialogComponent, {
      data: {car: car},
      header: 'DynamicDialog',
      width: '350px',
      baseZIndex: 10000,
      dismissableMask: false,
      style: {'minWidth': '200px', 'overflow': 'auto'}
    });

    ref.onClose.subscribe((back) => {
      if (back) {
        const index = this.cars.indexOf(back);
        this.cars[index].vin = 'dynamic';
      }
    });
  }
}
