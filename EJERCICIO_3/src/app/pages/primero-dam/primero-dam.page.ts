import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-primero-dam',
  templateUrl: './primero-dam.page.html',
  styleUrls: ['./primero-dam.page.scss'],
})
export class PrimeroDamPage implements OnInit {

  c1: true;
  c2: true;
  c3: true;
  c4: true;
  c5: true;
  c6: true;
  c7: true;

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Has seleccionado programación',
      duration: 600,
      position: 'top'
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Has seleccionado entornos de desarrollo',
      duration: 600,
      position: 'top'
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      message: 'Has seleccionado base de datos',
      duration: 600,
      position: 'top'
    });
    toast.present();
  }

  async presentToast4() {
    const toast = await this.toastController.create({
      message: 'Has seleccionado sistemas informáticos',
      duration: 600,
      position: 'top'
    });
    toast.present();
  }

  async presentToast5() {
    const toast = await this.toastController.create({
      message: 'Has seleccionado FOL',
      duration: 600,
      position: 'top'
    });
    toast.present();
  }

  async presentToast6() {
    const toast = await this.toastController.create({
      message: 'Has seleccionado inglés',
      duration: 600,
      position: 'top'
    });
    toast.present();
  }

  async presentToast7() {
    const toast = await this.toastController.create({
      message: 'Has seleccionado lenguaje de marcas',
      duration: 600,
      position: 'top'
    });
    toast.present();
  }
  ngOnInit() {
  }
}
