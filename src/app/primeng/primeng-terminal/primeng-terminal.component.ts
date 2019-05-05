import {Component, OnInit} from '@angular/core';
import {TerminalService} from 'primeng/components/terminal/terminalservice';

@Component({
  selector: 'app-primeng-terminal',
  templateUrl: './primeng-terminal.component.html',
  styleUrls: ['./primeng-terminal.component.css'],
  providers: [TerminalService]
})
export class PrimengTerminalComponent implements OnInit {

  innerHtml = '<input type="file">';

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(input => {
      this.innerHtml = input;
      this.terminalService.sendResponse('keep html');
    });
  }

  ngOnInit() {
  }

}
