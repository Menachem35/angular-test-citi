import { Component, OnInit } from '@angular/core';

import { CoinsAppService } from '../coins-app-service.service';

@Component({
  selector: 'app-transaction-grid',
  templateUrl: './transaction-grid.component.html',
  styleUrls: ['./transaction-grid.component.css']
})
export class TransactionGridComponent implements OnInit {

  constructor(private coinsAppService: CoinsAppService) { }

  // ag-grid
  public columnDefs;
  rowData: any[] = [];
  private gridApi: any;

  setGrid(): void {
    this.columnDefs = [
        {headerName: 'CurrencyPair', field: 'CurrencyPair', width: 150 },
        {headerName: 'Direction', field: 'Direction', width: 150 },
        {headerName: 'DealRate', field: 'DealRate', width: 100},
        {headerName: 'Notional', field: 'Notional'}
    ];
  }

  onGridReady(params: any) {
		this.gridApi = params.api;
	}

  ngOnInit() {
    this.setGrid();
    this.coinsAppService.getAskBid().subscribe(data => {
      const action: object = {
        'Bid': 'Buy',
        'Offer': 'Sell'
      };

      const getNotional: object = {
        'Bid': 10000000,
        'Offer': 200000000
      }
      
      const rate: object = {
        'Bid': data.bid,
        'Offer': data.offer
      };

      this.rowData.push({
        'CurrencyPair': data.currencies,
        'Direction': action[data.action],
        'DealRate':rate[data.action],
        'Notional': getNotional[data.action]
      });
      this.gridApi.setRowData(this.rowData);
    });
  }

}