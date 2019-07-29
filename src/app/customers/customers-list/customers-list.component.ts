import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

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
