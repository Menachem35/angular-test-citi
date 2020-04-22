import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceStyling'
})
export class PriceStylingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let price: string = value.toFixed(5).toString();
    return price;
  }

}