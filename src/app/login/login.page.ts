import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, public toastController: ToastController) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Successfull.',
      duration: 2000
    });
    toast.present();
  }

}
