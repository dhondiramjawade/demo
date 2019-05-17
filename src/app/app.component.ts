import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options : FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  title = 'demo';
  links = [
    {
      name :"Dashboard",
      link : "dashboard",
      icon : "dashboard"
    },{
      name :"Home",
      link : "temp",
      icon : "home"
    },{
      name :"Map",
      link : "map",
      icon : "layers"
    }
    ,{
      name :"User Management",
      link : "userMgt",
      icon : "account_circle"
    },
    {
      name :"Create User",
      link : "createUser",
      icon : "account_circle"
    }
    // ,{
    //   name :"Shut Down",
    //   link : "def",
    //   icon : "power_settings_new"
    // },{
    //   name :"Contact",
    //   link : "def",
    //   icon : "call"
    // }
  ];
}