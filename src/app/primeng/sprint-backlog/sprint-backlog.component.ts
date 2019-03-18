import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PrimeNgDataService} from '../primeng-data.service';
import {SprintBacklog} from '../sprint-backlog';

@Component({
  selector: 'app-sprint-backlog',
  templateUrl: './sprint-backlog.component.html',
  styleUrls: ['./sprint-backlog.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class SprintBacklogComponent implements OnInit {

  backlog: SprintBacklog[];

  cols: any[];

  constructor(private dataService: PrimeNgDataService) {
  }

  ngOnInit() {
    this.dataService.getSprintBacklog().subscribe((backlog) => {
      this.backlog = backlog;
    });

    this.cols = [
      {field: 'id', header: 'No.', width: '80px', textAlign: 'center'},
      {field: 'userStory', header: 'User Story', width: 'auto', textAlign: 'left'},
      {field: 'priority', header: 'Priority', width: '150px', textAlign: 'center'},
      {field: 'estimate', header: 'Estimate <br>(Hours)', width: '150px', textAlign: 'center'}
    ];
  }

}
