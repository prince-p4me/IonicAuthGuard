import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthenticationService, public toastController: ToastController) { }

  ngOnInit() {
  }

  logoutUser() {
    this.authService.logout();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Logout Successfull.',
      duration: 2000
    });
    toast.present();
  }

}
