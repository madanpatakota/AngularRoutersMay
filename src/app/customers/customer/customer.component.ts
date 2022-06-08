import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private customerService: CustomersService) { }

  output: any = [];

  ngOnInit(): void {
    // console.log(this.activateRoute);
    // console.log(this.router);

    //   let pathvalue:any = this.activateRoute.snapshot.routeConfig?.path?.split("/")[1];   //'3' value

    //   let snapshotParams:any = this.activateRoute.snapshot['params'];
    //   let customerIDValue = parseInt(snapshotParams.customerID);

    //   console.log(customerIDValue);
    //   let convertedValue = parseInt(pathvalue);


    //  //filter
    //  //this.output = arrayCustoemrs.filter((x)=> x.customerID === convertedValue);
    //  this.output = arrayCustoemrs.filter((x)=> x.customerID === customerIDValue);

    //console.log(this.output);
    //console.log(currentPath);
    //i belive that activateroute contains the url information.....


    this.activateRoute.params.subscribe((param: any) => {
      let arrayCustoemrs = this.customerService.getCustomers() //raw data..
      //console.log(param);
      this.output = arrayCustoemrs.filter((x) => x.customerID === +param.customerID);
    })


  }

}
