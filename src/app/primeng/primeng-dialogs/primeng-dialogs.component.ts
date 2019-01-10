import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Car} from '../car';
import {PrimeNgDataService} from '../primeng-data.service';
import {Type} from '@angular/core/src/type';
import {PrimengDialogComponent} from '../primeng-dialog/primeng-dialog.component';

@Component({
  selector: 'app-primeng-dialogs',
  templateUrl: './primeng-dialogs.component.html',
  styleUrls: ['./primeng-dialogs.component.css']
})

export class PrimengDialogsComponent implements OnInit {

  @ViewChild('carDetail', {read: ViewContainerRef}) container: ViewContainerRef;

  cars: Car[];

  cols: any[];

  constructor(private dataService: PrimeNgDataService,
              private componentFactory: ComponentFactoryResolver) {
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

}
