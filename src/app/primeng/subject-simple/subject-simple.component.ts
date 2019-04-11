import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {
  AsyncSubject,
  BehaviorSubject,
  from,
  fromEvent,
  interval,
  Observable,
  Observer,
  of,
  ReplaySubject,
  Subject,
  Subscription,
  timer
} from 'rxjs';
import {filter, map, reduce, take, tap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-subject-simple',
  templateUrl: './subject-simple.component.html',
  styleUrls: ['./subject-simple.component.css'],
  providers: [MessageService]
})

/**
 * 观察者模式实战
 */
export class SubjectSimpleComponent implements OnInit, OnDestroy {

  private readonly observerA: Observer<string> = null;
  private readonly observerB: Observer<string> = null;
  private subscriptions: Subscription[] = [];

  constructor(private messageService: MessageService) {

    this.observerA = {
      next: value => this.messageService.add({key: 'center', severity: 'success', summary: 'Observer A get value:', detail: value}),
      error: err => this.messageService.add({key: 'center', severity: 'error', summary: 'Observer A get value: ', detail: err}),
      complete: () => this.messageService.add({key: 'center', severity: 'info', summary: 'Observer A get value: ', detail: 'complete'})
    };

    this.observerB = {
      next: value => this.messageService.add({key: 'center', severity: 'success', summary: 'Observer B get value:', detail: value}),
      error: err => this.messageService.add({key: 'center', severity: 'error', summary: 'Observer B get value: ', detail: err}),
      complete: () => this.messageService.add({key: 'center', severity: 'info', summary: 'Observer B get value: ', detail: 'complete'})
    };
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  /**
   * interval 操作符
   */
  handleIntervalRun(): void {
    const observable = take(3)(interval(1000));
    this.subscriptions.push(observable.subscribe(this.observerA));
    setTimeout(() => {
      this.subscriptions.push(observable.subscribe(this.observerB));
    }, 1000);
  }

  /**
   * create 操作符
   */
  handleCreateRun(): void {
    const observable = Observable.create((observer) => {
      observer.next('create 1');
      observer.next('create 2');

      setTimeout(() => {
        observer.next('create 3');
      }, 300);
    });

    this.subscriptions.push(observable.subscribe(this.observerA));
  }

  /**
   * of 操作符
   */
  handleOfRun(): void {
    const observable = of('of 1', 'of 2', 'of 3');
    this.subscriptions.push(observable.subscribe(this.observerA));
  }

  /**
   * from 操作符
   */
  handleFromRun(): void {
    const observable = from(['from 1', 'from 2', 'from 3']);
    this.subscriptions.push(observable.subscribe(this.observerA));
  }

  /**
   * from 操作符
   */
  handleFromEventRun(): void {
    const observable = fromEvent(document.getElementById('fromEventButton'), 'click');
    const observer: Observer<Event> = {
      next: event => this.messageService.add({
        key: 'center',
        severity: 'success',
        summary: 'From Event: ',
        detail: event.toString()
      }),
      error: err => this.messageService.add({key: 'center', severity: 'error', summary: 'From Event: ', detail: err}),
      complete: () => this.messageService.add({key: 'center', severity: 'info', summary: 'From Event ', detail: 'complete'})
    };
    this.subscriptions.push(observable.subscribe(observer));
  }

  /**
   * fromPromise 操作符
   */
  handleFromPromiseRun(): void {
    const observable = fromPromise(new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('FromPromise complete.');
      }, 1000);
    }));
    this.subscriptions.push(observable.subscribe(this.observerA));
  }

  /**
   * timer 操作符
   */
  handleTimerRun(): void {
    const observable = take(10)(timer(1000, 300));
    this.subscriptions.push(observable.subscribe(this.observerA));
  }

  /**
   * 延迟计算 vs 渐进式取值
   */
  handleSumRun(): void {
    const observable = take(3)(interval(100)).pipe(
      map((current) => {
        return +current + 10;
      }),
      reduce((total, current) => {
        return +total + +current;
      }),
      filter((current) => {
        return +current > 10;
      })
    );
    this.subscriptions.push(observable.subscribe({
      next: value => this.messageService.add({
        key: 'center',
        severity: 'info',
        summary: 'Total: ',
        detail: value.toString()
      })
    }));
  }

  /**
   * Subject sample
   */
  handleSubjectRun(): void {
    const observable = take(3)(interval(1000));
    const subject = new Subject();
    this.subscriptions.push(subject.subscribe(this.observerA));
    this.subscriptions.push(observable.subscribe(subject));
    setTimeout(() => {
      this.subscriptions.push(subject.subscribe(this.observerB));
    }, 1000);
  }

  /**
   * BehaviorSubject sample
   */
  handleBehaviorSubjectRun(): void {
    const observable = take(2)(interval(1000));
    const subject = new BehaviorSubject('5');
    this.subscriptions.push(subject.subscribe(this.observerA));
    this.subscriptions.push(observable.subscribe(subject));
    setTimeout(() => {
      this.subscriptions.push(subject.subscribe(this.observerB));
    }, 5000);
  }

  /**
   * ReplaySubject sample
   */
  handleReplaySubjectRun(): void {
    const observable = take(3)(interval(1000));
    const subject = new ReplaySubject(2);
    this.subscriptions.push(subject.subscribe(this.observerA));
    this.subscriptions.push(observable.subscribe(subject));
    setTimeout(() => {
      this.subscriptions.push(subject.subscribe(this.observerB));
    }, 5000);
  }

  /**
   * AsyncSubject sample
   */
  handleAsyncSubjectRun(): void {
    const observable = take(2)(interval(1000));
    const subject = new AsyncSubject();
    this.subscriptions.push(subject.subscribe(this.observerA));
    this.subscriptions.push(observable.subscribe(subject));
    setTimeout(() => {
      this.subscriptions.push(subject.subscribe(this.observerB));
    }, 3000);
  }

}
