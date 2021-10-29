import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() arrComanda: Producto[];
  @Input() titulo: string = '';
  total: number;
  @Input() uniqueArray: Producto[];
  @Output() restarUno: EventEmitter<Producto>;
  @Output() sumarUno: EventEmitter<Producto>;

  constructor() {
    this.arrComanda = [];
    this.uniqueArray = [];
    this.total = 0;
    this.restarUno = new EventEmitter();
    this.sumarUno = new EventEmitter();
  }

  ngOnInit(): void {
  }

  precioTotal() {
    let total = 0;
    this.arrComanda.forEach(producto => total += producto.precio)
    return total;
  }



  numberOfThisProduct(producto: Producto, array: Producto[]) {
    return array.filter(product => product === producto).length;
  }

  modifyQuantityHandler(producto: Producto, simbol: string) {
    if (simbol == '-') {
      this.restarUno.emit(producto);
    } else {
      this.sumarUno.emit(producto);
    }
  }
}
