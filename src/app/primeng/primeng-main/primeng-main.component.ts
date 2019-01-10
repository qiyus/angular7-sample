import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {PrimeNgDataService} from '../primeng-data.service';
import {PrimengDialogsComponent} from '../primeng-dialogs/primeng-dialogs.component';
import {PrimengDynamicDialogsComponent} from '../primeng-dynamic-dialogs/primeng-dynamic-dialogs.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-primeng-main',
  templateUrl: './primeng-main.component.html',
  styleUrls: ['./primeng-main.component.css']
})
export class PrimengMainComponent implements OnInit {

  features: TreeNode[];

  selectedFeature: TreeNode;

  constructor(private router: Router,
              private dataService: PrimeNgDataService) {
  }

  ngOnInit() {
    this.dataService.getFeatures().subscribe((nodes) => {
      this.features = nodes;
      this.selectedFeature = this.features[0];
    });
  }

  onNodeSelected(event) {
    if (event.node.data) {
      this.router.navigate(['/primeng' + event.node.data], {skipLocationChange: true});
    }
  }
}
