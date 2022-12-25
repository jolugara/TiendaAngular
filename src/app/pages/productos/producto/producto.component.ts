import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input() producto!: Producto;
  @Output() addToCartClick = new EventEmitter<Producto>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.addToCartClick.emit(this.producto);
  }

}
