import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PrimeNgDataService} from '../primeng-data.service';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit, AfterViewInit {

  @ViewChild('box') box: ElementRef;

  tasks;
  boxHeight = 500;

  constructor(private dataService: PrimeNgDataService) { }

  ngOnInit() {
    this.dataService.getSprintBacklog().subscribe((backlog) => {
      this.tasks = backlog[0].task;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.boxHeight = this.box.nativeElement.clientHeight - 57;
    }, 200);
  }

}
