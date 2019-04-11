import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-promise-sample',
  templateUrl: './promise-sample.component.html',
  styleUrls: ['./promise-sample.component.css']
})

/**
 * Promise实战。
 */
export class PromiseSampleComponent implements OnInit {

  messages: Message[] = [];
  allMessage = '';
  raceMessage = '';
  waitMessage = '';

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 模拟异步操作成功
   */
  handleResolve() {
    const promise = new Promise<string>((resolve, reject) => {
      // 创建一个异步调用
      setTimeout(() => {
        resolve('异步调用成功。');
      }, 1000);
    });

    this.toMessage(promise);
  }

  /**
   * 模拟异步操作失败
   */
  handleReject() {
    const promise = new Promise<string>((resolve, reject) => {
      // 创建一个异步调用
      setTimeout(() => {
        reject('异步调用失败。');
      }, 1000);
    });
    this.toMessage(promise);
  }

  /**
   * iterable 参数内所有的 promise 都完成或任意一个失败。
   */
  handleAll() {
    const promise1: Promise<string> = Promise.resolve('promise1');
    const promise2: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(resolve, 300, 'promise2');
    });
    const promise3: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'promise3');
    });

    Promise.all<string, string, string>([promise1, promise2, promise3]).then((values) => {
      this.allMessage = values.toString();
    }).catch((values) => {
      this.allMessage = values.toString();
    });
  }

  /**
   * 迭代器中的某个promise解决或拒绝
   */
  handleRace() {
    const promise2: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(resolve, 200, 'promise2');
    });
    const promise3: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'promise3');
    });

    Promise.race<string, string>([promise2, promise3]).then((values) => {
      this.raceMessage = values.toString();
    });
  }

  /**
   * 等待异步处理完成。
   */
  async handlerWait() {
    const s = await this.resolveAfter2Seconds('Sleep for 2 seconds.');
    this.waitMessage = s.toString();
  }

  /**
   * 模拟异步处理。
   * @param x 返回字符串
   */
  private resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  /**
   * 在message中输出实行结果。
   * @param promise 被监测的异步操作。
   */
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
