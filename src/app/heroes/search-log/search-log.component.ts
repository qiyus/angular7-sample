import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-search-log',
    templateUrl: './search-log.component.html',
    styleUrls: ['./search-log.component.css']
})
export class SearchLogComponent implements OnInit, OnChanges {


    logs: string[];

    @Input()
    set key(key: string) {
        if (key) {
            const date = new Date();
            this.logs.push(`${key}: ${date.toUTCString()}`);
        }
    }

    @Input()
    clear: boolean;

    constructor() {
        this.logs = [];
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.clear) {
            this.logs = [];
        }
    }
}
