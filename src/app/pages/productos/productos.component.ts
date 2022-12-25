import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.servce';
import { Producto } from './interfaces/producto.interface';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos!: Producto[]; 

  constructor(private productoSvc: ProductosService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productoSvc.getProductos()
    .pipe(
        tap((productos: Producto[]) => this.productos = productos)
      )
    .subscribe();
  }

  addToCart(producto:Producto): void{
    this.shoppingCartSvc.updateCart(producto);
  }

}
