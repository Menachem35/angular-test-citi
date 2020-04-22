import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval } from 'rxjs';

import { CoinsAppService } from '../coins-app-service.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit, OnDestroy {

  constructor(private coinsAppService: CoinsAppService) { }

  private generatePrices = interval(5000); // Create the interval to generate prices every 5 seconds

  private bidPrice: number;
  private offerPrice: number;

  // Use to display the bid & offer prices with 4th & 5th letters larger
  public displayBidPrice1: string;
  public displayBidPrice2: string;
  public displayBidPrice3: string;

  public displayOfferPrice1: string;
  public displayOfferPrice2: string;
  public displayOfferPrice3: string;

  public coinsPair: any[] = [
    {
      'coins': ['EUR/USD', 'EUR/GBP', 'USD/CAD', 'AUD/CAD', 'USD/JPY'],
      'input': 100,
      'bid': this.bidPrice,
      'offer': this.offerPrice
    },
    {
      'coins': ['EUR/USD', 'EUR/GBP', 'USD/CAD', 'AUD/CAD', 'USD/JPY'],
      'input': 100,
      'bid': this.bidPrice,
      'offer': this.offerPrice
    },
    {
      'coins': ['EUR/USD', 'EUR/GBP', 'USD/CAD', 'AUD/CAD', 'USD/JPY'],
      'input': 100,
      'bid': this.bidPrice,
      'offer': this.offerPrice
    },
    {
      'coins': ['EUR/USD', 'EUR/GBP', 'USD/CAD', 'AUD/CAD', 'USD/JPY'],
      'input': 100,
      'bid': this.bidPrice,
      'offer': this.offerPrice
    },
    {
      'coins': ['EUR/USD', 'EUR/GBP', 'USD/CAD', 'AUD/CAD', 'USD/JPY'],
      'input': 100,
      'bid': this.bidPrice,
      'offer': this.offerPrice
    }
  ];

  public displayBids: number = 0;

  /**
   * Adds new pair when click the green plus button
   */
  addCoinsPair(): void {
    this.coinsPair.push(
      {
        'coins': ['EUR/USD', 'EUR/GBP', 'USD/CAD', 'AUD/CAD', 'USD/JPY'],
        'input': 100,
        'bid': this.bidPrice,
        'offer': this.offerPrice
      }
    );
  }

  removeItem(selectedItem): void {
    this.coinsPair.splice(selectedItem, 1);
  }

  createBidOffer(bidOrOffer: string): void {
    this.coinsAppService.createAskBid(bidOrOffer);
  }

  // Creates random numbers (prices)
  pricingGenerator(): void {
    let x = Math.random() + 1;
      let y = Math.random() + 1;
      if (x > y) {
        this.offerPrice = y;
        this.bidPrice = x;

        let offerPriceToStr = this.offerPrice.toFixed(5).toString();
        let bidPriceToStr = this.bidPrice.toFixed(5).toString();

        this.displayBidPrice1 = offerPriceToStr.substr(0,4);
        this.displayBidPrice2 = offerPriceToStr.substr(4,2);
        this.displayBidPrice3 = offerPriceToStr.substr(6,1);

        this.displayOfferPrice1 = bidPriceToStr.substr(0,4);
        this.displayOfferPrice2 = bidPriceToStr.substr(4,2);
        this.displayOfferPrice3 = bidPriceToStr.substr(6,1);

      } else if (x < y) {
        this.offerPrice = x;
        this.bidPrice = y;

        let offerPriceToStr = this.offerPrice.toFixed(5).toString();
        let bidPriceToStr = this.bidPrice.toFixed(5).toString();

        this.displayBidPrice1 = offerPriceToStr.substr(0,4);
        this.displayBidPrice2 = offerPriceToStr.substr(4,2);
        this.displayBidPrice3 = offerPriceToStr.substr(6,1);

        this.displayOfferPrice1 = bidPriceToStr.substr(0,4);
        this.displayOfferPrice2 = bidPriceToStr.substr(4,2);
        this.displayOfferPrice3 = bidPriceToStr.substr(6,1);
      }
      
      console.log(this.bidPrice);
  }

  ngOnInit() {
    this.pricingGenerator(); // Create random prices
    this.generatePrices.subscribe(data => {
      this.pricingGenerator();
    });
    
    /*setInterval(() => {
      
    }, 5000);*/
  }

  ngOnDestroy() {
   this.generatePrices.unsubscribe();
  }

}