import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customerOrdersTotal: number;
  currencyCode: 'USD';

  constructor() { }

  ngOnInit() {

  }

  calculateOrders() {
    this.customerOrdersTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customerOrdersTotal += cust.orderTotal;
    });
  }

  sort(prop: string) {
    // a sorter service will handle the sorting
  }

}
