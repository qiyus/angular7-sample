import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';
import {HttpClientModule} from '@angular/common/http';
import {PrimeNgModule} from './primeng/primeng.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    HeroesModule,
    PrimeNgModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
