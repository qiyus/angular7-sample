import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit, AfterViewInit {

  @ViewChild('box') box: ElementRef;

  cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  boxHeight = 500;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.boxHeight = this.box.nativeElement.clientHeight - 57;
    }, 200);
  }

}
