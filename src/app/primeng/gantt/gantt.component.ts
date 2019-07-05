import {Component, Input, OnInit} from '@angular/core';
import {I} from '@angular/cdk/keycodes';

@Component({
    selector: 'app-gantt',
    templateUrl: './gantt.component.html',
    styleUrls: ['./gantt.component.css']
})
export class Gantt implements OnInit {

    startDate: Date;
    endDate: Date;

    month = [];
    isSelectedBar = false;

    constructor() {
        this.startDate = new Date('2015-01-07');
        this.endDate = new Date('2020-01-07');
    }

    ngOnInit() {
        this.month = this.generateMonth();
    }


    generateMonth(): GanttMonth[] {
        const date = this.startDate;
        const result = [];
        while (date.valueOf() < this.endDate.valueOf()) {
            result.push(this.generateDay(date));
            date.setMonth(date.getMonth() + 1);
        }
        return result;
    }

    generateDay(month: Date): GanttMonth {

        const ganttMonth: GanttMonth = {month: this.toMonthString(month), day: []};
        const year = month.getFullYear();
        switch (month.getMonth() + 1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                this.pushDay(ganttMonth, 31);
                break;
            case 2:
                if (this.isLeapYear(year)) {
                    this.pushDay(ganttMonth, 29);
                } else {
                    this.pushDay(ganttMonth, 28);
                }
                break;
            default:
                this.pushDay(ganttMonth, 30);
                break;
        }

        return ganttMonth;
    }

    private pushDay(month: GanttMonth, max: number): void {
        for (let i = 1; i <= max; i++) {
            month.day.push(i);
        }
    }

    private toMonthString(date: Date): string {
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
    }

    private isLeapYear(year: number): boolean {
        if (year % 100 > 0) {
            return !(year % 4);
        } else {
            return !(year % 400);
        }
    }

    public onClickBar(): void {
        this.isSelectedBar = !this.isSelectedBar;
    }
}
