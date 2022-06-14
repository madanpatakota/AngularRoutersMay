import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  useremail = "";
  userpassword = "";



  evtLogin(){
    // i want to store the useremail and userpassword
    //into the localstroage
    //. because of i need the clientInformation

    localStorage.setItem("userEmail",this.useremail);
    localStorage.setItem("userPassword",this.userpassword);


    //http://localhost:4200/customers
    //

    //before user is entering this component
    // i have to check the email and password
    //so that i have confiutred the 
    //canactivate guard....
    this.router.navigate(["customers"]);

  }

}
