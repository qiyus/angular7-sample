import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {PrimeNgDataService} from '../primeng-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-primeng-main',
  templateUrl: './primeng-main.component.html',
  styleUrls: ['./primeng-main.component.css']
})
export class PrimengMainComponent implements OnInit {

  features: TreeNode[];

  selectedFeature: TreeNode;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private dataService: PrimeNgDataService) {
  }

  ngOnInit() {
    this.dataService.getFeatures().subscribe((nodes) => {
      this.features = nodes;
      this.selectedFeature = this.urlIdenticalFeature(this.activatedRoute.snapshot.children[0].url[0].path);
    });
  }

  private urlIdenticalFeature(url: string): TreeNode {
    for (const feature of this.features) {
      if (feature.data === url) {
        return feature;
      }
    }
    return this.features[0];
  }

  onNodeSelected(event) {
    if (event.node.data) {
      this.router.navigate(['/primeng/' + event.node.data], {skipLocationChange: false});
      console.log(this.activatedRoute.snapshot.routeConfig);
    }
  }
}
