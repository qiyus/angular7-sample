import {Component, HostBinding, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    searchKey: string;
    searchCount = 0;
    clear = 0;

    constructor(private heroService: HeroService) {
    }

    @HostBinding('class') get themeClass() {
        return 'theme-light';
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    onSearch(event: string): void {
        this.searchKey = event;
        this.searchCount++;
        if (this.searchCount > 5) {
            this.searchCount = 0;
            this.clear++;
        }
    }
}
