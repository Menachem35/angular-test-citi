import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class CoinsAppService {

  constructor() { }

  private subject = new Subject<any>();

  /**
   * @param action: Bid or Offer
   * The method uses the next method to send the clicked button information to buy-sell component
   */
  createAskBid(actionDetails: any): void {
    let getClass: string;

    if (actionDetails.action === "Bid") {
      getClass = "askBidContainer";
    } else if (actionDetails.action === "Offer") {
      getClass = "askOfferContainer";
    }
    this.subject.next({
      "action":actionDetails.action, 
      "class": getClass,
      "currencies": actionDetails.currenciesPair,
      "bid": actionDetails.bidPrice,
      "offer": actionDetails.offerPrice
    });
  }

  getAskBid(): Observable<any> {
    return this.subject.asObservable();
  }


}