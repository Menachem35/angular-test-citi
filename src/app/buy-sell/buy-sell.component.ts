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
    if (this.action === "Bid") {
      return 'askBidContainer';
    } else if (this.action === "Offer") {
      return 'askOfferContainer';
    }

    return;
  }

  ngOnInit() {
    this.coinsAppService.getAskBid().subscribe(data => {
        console.log(data);
        this.action = data.action;
        this.bids.push(data);console.log(this.bids);
    });
  }

  ngOnDestroy() {
    this.coinsAppService.getAskBid().unsubscribe();
  }

}