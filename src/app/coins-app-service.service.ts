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
  createAskBid(action: string): void {
    let getClass: string;

    if (action === "Bid") {
      getClass = "askBidContainer";
    } else if (action === "Offer") {
      getClass = "askOfferContainer";
    }
    this.subject.next({
      "action":action, 
      "class": getClass
    });
  }

  getAskBid(): Observable<any> {
    return this.subject.asObservable();
  }


}