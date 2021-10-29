import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPV';
  arrComida: Producto[];
  arrBebida: Producto[];
  arrComanda: Producto[];
  uniqueArray: Producto[];


  constructor() {
    this.arrBebida = [{
      nombre: 'cocacola',
      imagen: 'https://pbs.twimg.com/profile_images/1349020259144052738/4VgvQMQf_400x400.jpg',
      precio: 1
    }, {
      nombre: 'PEPSI',
      imagen: 'https://www.tutrebol.es/82538-large_default/refresco-lata-pepsi-cola-330-ml.jpg',
      precio: 2
    }, {
      nombre: 'BITTERKAS',
      imagen: 'https://lafuente.es/wp-content/uploads/2019/10/2285.jpg',
      precio: 3
    }, {
      nombre: 'REDBULL',
      imagen: 'https://img.redbull.com/images/c_crop,x_0,y_353,h_3200,w_2560/c_fill,w_790,h_878/q_auto,f_auto/redbullcom/2021/7/13/jo1h4iqusu8v7ywko93j/red-bull-energy-drink',
      precio: 3
    }, {
      nombre: 'Fanta',
      imagen: 'https://www.encopadebalon.com/3497-large_default/fanta-naranja-pack-24-unidades-33cl.jpg',
      precio: 2
    }, {
      nombre: 'Trina',
      imagen: 'https://www.marquezshop.com/media/images/product/2020/04/28/1588076953/0209.jpg',
      precio: 6
    }, {
      nombre: 'limon y nada',
      imagen: 'https://static.carrefour.es/hd_510x_/img_pim_food/724568_00_1.jpg',
      precio: 9
    }, {
      nombre: 'Barceló',
      imagen: 'https://marianomadrueno.es/wp-content/uploads/2019/08/barcelo-anejo-ron-negro.png',
      precio: 10
    }, {
      nombre: 'Cardhu',
      imagen: 'https://www.calferu.com/14007-thickbox_default/whisky-cardhu-12-anos-0-70-l.jpg',
      precio: 15
    }];

    /* ************************************************************* */
    this.arrComida = [{
      nombre: 'Burguer',
      imagen: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
      precio: 19
    }, {
      nombre: 'Espaguetti',
      imagen: 'https://www.rociococinaencasa.com/wp-content/uploads/2020/04/comidas-sencillas-ricas.png',
      precio: 15
    }, {
      nombre: 'Lasaña',
      imagen: 'https://tipsparatuviaje.com/wp-content/uploads/2020/03/lasana-comida.jpg',
      precio: 17
    }, {
      nombre: 'Patas de pollo',
      imagen: 'https://www.cocinayvino.com/wp-content/uploads/2018/09/raro10.jpg',
      precio: 35
    }, {
      nombre: 'alquitrán',
      imagen: 'https://media.istockphoto.com/photos/tar-picture-id914979042',
      precio: 21
    }, {
      nombre: 'Albondigon gordo ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14u8cvsSoJwzRsHwTZOW_FfH62x42CByHCse_CdTTaflsP4vdPm4KSr824gHwoFZTsQ8&usqp=CAU',
      precio: 60
    }, {
      nombre: 'Koala',
      imagen: 'https://t2.ev.ltmcdn.com/es/posts/0/0/4/el_koala_esta_en_peligro_de_extincion_3400_600.jpg',
      precio: 999
    }, {
      nombre: 'Triceratops',
      imagen: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/asi-evoluciono-el-escudo-del-triceratops/8337940-1-esl-MX/Asi-evoluciono-el-escudo-del-triceratops.jpg',
      precio: 1089
    }, {
      nombre: 'Una supernova',
      imagen: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/article/614450fc5bafe850e38644ca/supernova-extincion_0.jpg',
      precio: 6
    }];
    this.arrComanda = [];
    this.uniqueArray = [];
  }


  setProductToComanda($event: Producto) {
    this.arrComanda.push($event);
    this.uniqueArray = [...new Set(this.arrComanda)];
  }

  borrarProducto($event: Producto) {
    this.arrComanda.splice(this.arrComanda.findIndex(producto => producto == $event), 1);
    this.uniqueArray = [...new Set(this.arrComanda)];
  }
}




