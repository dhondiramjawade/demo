import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName  =  "";
  password = "";
  isValid = false;
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  goToApplication (){
    if(this.userName == "admin" && this.password == "admin"){
      this.router.navigate(['/temp']);
    } else {
      this.router.navigate(['']);
      this.isValid = true;
    }
  }

}
