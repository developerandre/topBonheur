import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';
@Injectable()
export class DataService {
  logged:boolean = false;
  isAdmin:boolean = false;
  loginData:any;
  baseUrl:string ="http://localhost:4300";
  constructor(private http:Http) { }
  login(value:any){
     let opts:any =new RequestOptions();
    let headers =new Headers();
    headers.append("content-type","application/x-www-form-urlencoded");
    opts.headers = headers;
    return this.http.post(`${this.baseUrl}/api/login`,value,opts);
  }
  register(value:any){
    let opts:any =new RequestOptions();
    let headers =new Headers();
    headers.append("content-type","application/x-www-form-urlencoded");
    opts.headers = headers;
    return this.http.post(`${this.baseUrl}/api/register`,value,opts);
  }
}
