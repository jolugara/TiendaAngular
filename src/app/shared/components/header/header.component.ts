import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.servce';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <span>Mi Tienda</span>
    {{quantity$ | async | json}} - Quantity
    {{total$ | async | json}} - Total
    {{cart$ | async | json}} - Cart
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;
  constructor(private shoppingCartSvc: ShoppingCartService){}
}
