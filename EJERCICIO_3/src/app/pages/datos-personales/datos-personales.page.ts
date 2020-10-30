import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  constructor() { }

  Nombre = '';
  Localidad = 'Manzanares';
  Estudios = '';
  Email = '';
  Contrasenya = '';

  ngOnInit() {
  }

}
