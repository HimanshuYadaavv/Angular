import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  url="url from postman without data back end"

  constructor(private httpClient:HttpClient) { }//dependency  injection

  public async getUserinfo(name:string){
    return this.httpClient.post(this.url,name);


  }


}
