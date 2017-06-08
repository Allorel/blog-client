// Core components
import { Injectable }  from '@angular/core';
import { Http }         from '@angular/http';

//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobal } from '../models/newsapi-global.model';

@Injectable()
export class NewsApiService {

    private baseUrl: string = "https://newsapi.org/v1/";
    private source : string = "the-next-web";
    private apiKey: string = "d10411e216074e3ab7076f410eaab5fd";


    constructor(private http: Http){

    }

    public getArticles() : Promise<NewsApiGlobal> {
        const url = `${this.baseUrl}articles?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;
        const nurl = this.baseUrl + 'articles?sources=' + this.source + "";

        console.log(url);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as NewsApiGlobal)
            .catch(error => console.log('Une erreur est survenue ' + error));
    }
}