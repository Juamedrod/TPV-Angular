import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'panel-muestra-producto',
  templateUrl: './panel-muestra-producto.component.html',
  styleUrls: ['./panel-muestra-producto.component.css']
})
export class PanelMuestraProductoComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() arrMostrar: Producto[];
  @Output() onClickSendProducto: EventEmitter<Producto>;
  constructor() {
    this.arrMostrar = [];
    this.onClickSendProducto = new EventEmitter();
  }

  ngOnInit(): void {
  }

  enviarAComanda(producto: Producto) {
    this.onClickSendProducto.emit(producto);
  }


}
