import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesRoutingModule} from './heroes-routing.module';
import {SearchLogComponent} from './search-log/search-log.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HeroesRoutingModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        SearchLogComponent
    ]
})
export class HeroesModule {
}
