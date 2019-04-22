import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-sign',
  templateUrl: './board-sign.component.html',
  styleUrls: ['./board-sign.component.css']
})
export class BoardSignComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  forgot(): void {
    this.router.navigate(['/primeng/reset'], {skipLocationChange: false});
  }

}
