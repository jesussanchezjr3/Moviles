import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-dam',
  templateUrl: './segundo-dam.page.html',
  styleUrls: ['./segundo-dam.page.scss'],
})
export class SegundoDamPage implements OnInit {

  elementos = [
    {
      asignatura: 'ACCESO A DATOS',
      icono: 'https://thumbs.dreamstime.com/b/acceso-datos-35724728.jpg',
      color: 'warning',
      isChecked: 'true' , },
      {
      asignatura: 'PROGRAMACIÓN MULTIMEDIA Y MÓVILES',
      icono: 'https://www.tuexpertomovil.com/wp-content/uploads/2019/07/alcatel1-x-01.jpg',
      color: 'primary',
      isChecked: 'true', },
      {
        asignatura: 'INTERFACES',
        icono: 'https://blog.ida.cl/wp-content/uploads/sites/5/2019/11/EspacioBlancoNegativo_Blog-655x470.png',
        color: 'secondary',
        isChecked: 'true', },
        {
          asignatura: 'EMPRESAS E INICIATIVA EMPRENDEDORA',
          icono: 'https://images-na.ssl-images-amazon.com/images/I/518bRonFevL._AC_SX466_.jpg',
          color: 'danger',
          isChecked: 'true', },
          {
            asignatura: 'SISTEMAS DE GESTIÓN EMPRESARIAL',
            icono: 'https://cioperu.pe/Revista_Recursos/FotoReportaje/2017/Aprendizaje_Interfase_Web/Aprendizaje_Interfase_Web_1.jpg',
            color: 'light',
            isChecked: 'true', },
            {
              asignatura: 'PROCESOS Y SERVICIOS',
              icono: 'https://www.isotools.org/wp-content/uploads/2013/06/foto-2.jpg',
              color: 'dark',
              isChecked: 'true', },


  ];
  constructor() { }

  ngOnInit() {
  }

}
