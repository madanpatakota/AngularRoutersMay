import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }


  // i want to capture the data from the routing....


  message = "";
  ngOnInit(): void {

    //here data contains the Message.
    //how i get the data Message?
    //when i subscribe the data then i can get the message.
    // what is the activateroute
    // this is the my current url

    // from my currenturl i am taking the data and subscribe . beacuse i need the message from the data.....

  
   this.activateRoute.data.subscribe((value)=>{
     this.message = value[0];
   })

  }

}
