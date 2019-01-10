import {NgModule} from '@angular/core';
import {PrimengMainComponent} from './primeng-main/primeng-main.component';
import {TreeModule} from 'primeng/tree';
import {PrimengRoutingModule} from './primeng-routing/primeng-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {PrimengDialogComponent} from './primeng-dialog/primeng-dialog.component';
import {DialogModule} from 'primeng/dialog';
import {PrimengDynamicDialogComponent} from './primeng-dynamic-dialog/primeng-dynamic-dialog.component';
import {PrimengDialogsComponent} from './primeng-dialogs/primeng-dialogs.component';
import { PrimengDynamicDialogsComponent } from './primeng-dynamic-dialogs/primeng-dynamic-dialogs.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { PrimengTabViewComponent } from './primeng-tab-view/primeng-tab-view.component';
import {TabViewModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimengRoutingModule,
    TreeModule,
    ButtonModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    TabViewModule
  ],
  declarations: [
    PrimengMainComponent,
    PrimengDialogComponent,
    PrimengDialogsComponent,
    PrimengDynamicDialogComponent,
    PrimengDynamicDialogsComponent,
    PrimengTabViewComponent
  ],
  entryComponents: [
    PrimengDialogComponent,
    PrimengDynamicDialogComponent
  ]
})
export class PrimeNgModule {
}
