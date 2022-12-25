import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Producto } from "src/app/pages/productos/interfaces/producto.interface";

@Injectable(
    {providedIn: 'root'}
)

export class ShoppingCartService{
    productos : Producto[] = [];

    private cartSubject = new Subject<Producto[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    get totalAction$(): Observable<number>{
        return this.totalSubject.asObservable();
    }
    get quantityAction$(): Observable<number>{
        return this.quantitySubject.asObservable();
    }
    get cartAction$(): Observable<Producto[]>{
        return this.cartSubject.asObservable();
    }

    updateCart(producto:Producto): void{
        this.addToCart(producto);
        this.quantityProducts();
        this.calcTotal();
    }

    private addToCart(producto:Producto): void{
        this.productos.push(producto);
        this.cartSubject.next(this.productos);
    }

    private quantityProducts():void{
        const quantity = this.productos.length;
        this.quantitySubject.next(quantity);
    }

    private calcTotal(): void{
        const total = this.productos.reduce((acc, prod) => acc +=prod.price, 0);
        this.totalSubject.next(total);
    }
}
