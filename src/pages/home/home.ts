import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// On ajoute NavParams pour pouvoir recupérer des valeurs provenant 

import { NewsApiGlobal } from '../../models/newsapi-global.model';
import { NewsApiService } from '../../services/newsapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
  password : string;
  news : NewsApiGlobal = new NewsApiGlobal;

  constructor(public navCtrl: NavController, private navParams: NavParams, private newsApiService : NewsApiService) {
    this.username = this.navParams.get('username');
    this.password = this.navParams.get('password');
    console.log('Inside HomePage');
    console.log(this.navParams.get('username'));

    this.newsApiService.getArticles()
    .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);
    });
  }

}
