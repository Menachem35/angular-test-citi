import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { CoinsAppService } from './coins-app-service.service';
import { PriceStylingPipe } from './price-styling.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MainViewComponent, BuySellComponent, PriceStylingPipe ],
  bootstrap:    [ AppComponent ],
  providers: [CoinsAppService]
})
export class AppModule { }
