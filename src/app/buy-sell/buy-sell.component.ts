import { Component, /*Input,*/ OnDestroy, OnInit } from '@angular/core';

import { CoinsAppService } from '../coins-app-service.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.css']
})
export class BuySellComponent implements OnInit, OnDestroy {

  constructor(private coinsAppService: CoinsAppService) { }

  //@Input() getDisplayBid: number;

  public bids: any[] = []; // Holds the Bids / offers to display in the view
  private action: string; // Return the clicked button - Bid or Offer

  /**
   * Return the css class when click the Bid/Offer button (green or red)
   */
  bidOrOfferColor(): any {
    if (this.action === "Buy") {
      return 'askBidContainer';
    } else if (this.action === "Sell") {
      return 'askOfferContainer';
    }

    return;
  }

  ngOnInit() {
    this.coinsAppService.getAskBid().subscribe(data => {
        console.log(data);

        const getAction: object = {
          'Bid': 'Buy',
          'Offer': 'Sell'
        };

        const units: object = {
          'Bid': '10,000,000',
          'Offer': '200,000,000'
        }

        const rate: object = {
          'Bid': data.bid,
          'Offer': data.offer
        };

        this.action = getAction[data.action];
        this.bids.push({
          'Direction': getAction[data.action],
          'Units': units[data.action],
          'Currencies': data.currencies,
          'Rate': rate[data.action],
          'class': this.bidOrOfferColor()
        });
    });
  }

  ngOnDestroy() {
    this.coinsAppService.getAskBid().unsubscribe();
  }

}