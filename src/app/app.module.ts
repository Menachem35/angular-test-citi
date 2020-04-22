import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { CoinsAppService } from './coins-app-service.service';
import { PriceStylingPipe } from './price-styling.pipe';
import { TransactionGridComponent } from './transaction-grid/transaction-grid.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents([]), ],
  declarations: [ AppComponent, HelloComponent, MainViewComponent, BuySellComponent, PriceStylingPipe, TransactionGridComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CoinsAppService]
})
export class AppModule { }
