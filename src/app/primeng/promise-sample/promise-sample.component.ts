import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/api';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-promise-sample',
  templateUrl: './promise-sample.component.html',
  styleUrls: ['./promise-sample.component.css']
})
export class PromiseSampleComponent implements OnInit {

  messages: Message[] = [];
  allMessage = '';
  raceMessage = '';
  waitMessage = '';

  constructor() {
  }

  ngOnInit() {
  }

  handlerResolve() {
    const promise = new Promise<string>((resolve, reject) => {
      // 创建一个异步调用
      setTimeout(() => {
        resolve('异步调用成功。');
      }, 1000);
    });

    this.toMessage(promise);
  }

  handlerReject() {
    const promise = new Promise<string>((resolve, reject) => {
      // 创建一个异步调用
      setTimeout(() => {
        reject('异步调用失败。');
      }, 1000);
    });
    this.toMessage(promise);
  }

  handlerAll() {
    const promise1: Promise<string> = Promise.resolve('promise1');
    const promise2: Promise<string> = new Promise(function (resolve, reject) {
      setTimeout(resolve, 300, 'promise2');
    });
    const promise3: Promise<string> = new Promise(function (resolve, reject) {
      setTimeout(resolve, 100, 'promise3');
    });

    Promise.all<string, string, string>([promise1, promise2, promise3]).then((values) => {
      this.allMessage = values.toString();
    }).catch((values) => {
      this.allMessage = values.toString();
    });
  }

  handlerRace() {
    const promise2: Promise<string> = new Promise(function (resolve, reject) {
      setTimeout(resolve, 200, 'promise2');
    });
    const promise3: Promise<string> = new Promise(function (resolve, reject) {
      setTimeout(resolve, 100, 'promise3');
    });

    Promise.race<string, string>([promise2, promise3]).then((values) => {
      this.raceMessage = values.toString();
    });
  }

  async handlerWait() {
    const s = await this.resolveAfter2Seconds('Sleep for 2 seconds.');
    this.waitMessage = s.toString();
  }

  private resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  toMessage(promise: Promise<string>) {
    promise.then((message) => {
      this.messages = [];
      this.messages.push({severity: 'success', summary: '', detail: message});
    }).catch((message) => {
      this.messages = [];
      this.messages.push({severity: 'error', summary: '', detail: message});
    }).finally(() => {
      this.messages.push({severity: 'info', summary: '', detail: '异步调用结束。'});
    });
  }
}
