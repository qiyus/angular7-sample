import {AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Car} from '../domian/car';
import {PrimeNgDataService} from '../primeng-data.service';
import {Type} from '@angular/core/src/type';
import {PrimengDialogComponent} from '../primeng-dialog/primeng-dialog.component';

@Component({
  selector: 'app-primeng-dialogs',
  templateUrl: './primeng-dialogs.component.html',
  styleUrls: ['./primeng-dialogs.component.css']
})

export class PrimengDialogsComponent implements OnInit, AfterViewInit {

  @ViewChild('carDetail', {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChild('box') box: ElementRef;

  cars: Car[];

  cols: any[];

  scrollHeight = 350;

  constructor(private dataService: PrimeNgDataService,
              private componentFactory: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.dataService.getCarsSmall().subscribe((cars) => {
      this.cars = cars;
    });

    this.cols = [
      {field: 'operation', header: 'Operation', width: '180px'},
      {field: 'vin', header: 'Vin', width: '100px'},
      {field: 'year', header: 'Year', width: '100px'},
      {field: 'brand', header: 'Brand', width: '100px'},
      {field: 'color', header: 'Color', width: '180px'}
    ];
  }

  ngAfterViewInit () {
    setTimeout(() => {
      this.scrollHeight = this.box.nativeElement.clientHeight;
    }, 5);
  }

  show(car: Car) {
    const dialog = this.loadComponent(PrimengDialogComponent);
    dialog.setParameter(car);
    dialog.callBack.subscribe((back) => {
      const index = this.cars.indexOf(back);
      this.cars[index].vin = '0000';
    });
    return;
  }

  private loadComponent<T>(component: Type<T>): T {
    const componentFactory = this.componentFactory.resolveComponentFactory(component);
    this.container.clear();
    return this.container.createComponent(componentFactory).instance;
  }

  customSort(event) {
    event.data.sort((data1, data2) => {
      const value1 = data1[event.field];
      const value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      }

      return (event.order * result);
    });
  }
}
