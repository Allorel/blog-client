// Core components
import { Injectable }  from '@angular/core';
import { Http }         from '@angular/http';

//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class BaseService {
    
    endpoint : string = "url_vers_endpoint";
    
    constructor(private http : Http){

    }
}