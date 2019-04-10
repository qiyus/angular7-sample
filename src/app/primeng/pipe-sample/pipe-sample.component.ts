import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.css']
})
export class PipeSampleComponent implements OnInit {

  today: number = Date.now();
  isEnglish = true;

  messages = [];
  messageMapping: { [k: string]: string } = {
    '=0': 'No message.',
    'other': 'Total 0'
  };

  greeting: Promise<string> | null = null;
  arrived = true;
  private resolve: Function | null = null;

  constructor() {
    this.resetGreeting();
  }

  ngOnInit() {
  }

  onChangeArrived() {
    if (this.arrived) {
      this.resetGreeting();
    } else {
      this.resolve('hi there.');
    }
  }

  private resetGreeting() {
    this.greeting = new Promise<string>((resolve) => {
      this.resolve = resolve;
    });
  }

  handleClick() {
    const index = this.messages.length + 1;
    this.messages.push(`message ${index}`);
    this.messageMapping = {
      '=0': 'No message.',
      'other': `Total ${index}`
    };
  }
}
