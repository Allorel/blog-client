import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { User } from '../../models/user.model';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    username : string;
    password : string;
    user: User;

  constructor (public navCtrl: NavController){

  }

  sign () {
        console.log('Hello World');
        //console.log(this.user.name);
        //console.log(this.user.password);
       // this.user.name = this.username;
       // this.user.password = this.password;

        //console.log(this.user); 
        
        if(this.password == "password"){
          // Fonctionnalité pour passer à la page suivante 
          // Pour pouvoir passer plusieurs paramètres il le passé dans un objet 
          this.navCtrl.push(HomePage, {
            username : this.username,
            password : this.password
          });
          //  this.navCtrl.push(HomePage, {
          //    username : this.username
          //  });
        }
  }

}
