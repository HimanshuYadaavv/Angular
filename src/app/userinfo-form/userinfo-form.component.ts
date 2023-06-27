import { Component } from '@angular/core';
import {Userinfo} from "../userinfo";

@Component({
  selector: 'app-userinfo-form',
  templateUrl: './userinfo-form.component.html',
  styleUrls: ['./userinfo-form.component.css']
})
export class UserinfoFormComponent {



  model=new Userinfo(14,'Rex','1234');

  submitted=false;
  onSubmit(){
    this.submitted=true
    // @ts-ignore
    this.model= this.userinfoservice.getUserinfo(this.model.name)}


}
