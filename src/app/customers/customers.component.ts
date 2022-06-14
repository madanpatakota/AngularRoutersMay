import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { Router , ActivatedRoute } from '@angular/router';
import { canDeactivateCustomersComponent } from '../can-deactivate.guard';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements canDeactivateCustomersComponent, OnInit {

  constructor(private customersService:CustomersService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  customers:any= null;

  initPath:any = "";
  ngOnInit(): void {
      this.customers = this.customersService.getCustomers();
      this.initPath = this.router.url.replace('/','').concat("/");

      //this.router.url = "customer/"
  }


      
  evtNavigate(customerID:string){
      //this.activateRoute.na

      //console.log(this.activateRoute.url);
      console.log(this.initPath);
      
      //http://localhost:4200/customers + ['customer',1]
      //this.router.navigate(['customers/customer',1]);
      //this.router.navigate([this.initPath+'customer',+customerID]);
      //this.router.navigate([this.initPath + 'customer'],{ queryParams:{'customerID':+customerID} });
      //console.log(customerID.toString());
      this.router.navigate([this.initPath + 'customer'],{fragment: customerID.toString() });

  }


   txtModel = "";
  
   canDeactivate() : boolean{
      if(this.txtModel.length > 0){
        window.confirm("Do you want to discard the changes?");

        //in case ok then true or cancel false

        //return false;
      }
      return true;
    }

    evtSubmit(){
       console.log("fired");
    }

}
