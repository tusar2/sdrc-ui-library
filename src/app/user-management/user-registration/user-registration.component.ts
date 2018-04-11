import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '../models/user-forms.model';
import { UserFormControlService } from '../services/user-form-control.service';
import { WebApiService } from '../services/web-api.service';
import { UserDataSharingService } from '../services/user-data-sharing.service';
import { Input } from '@angular/core/src/metadata/directives'; 
declare var $: any;

@Component({
  selector: 'sdrc-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  allUserFields: any;
  userRegistrationFields: any; 
  constructor(private webApi: WebApiService,) { }

  ngOnInit() {
    this.webApi.getAllUserFields().subscribe(Response => {
      this.allUserFields = Response;
      this.userRegistrationFields = this.allUserFields['user-registration-fields'];
      //console.log(this.userRegistrationFields);
    }) ;
  }
  submitForm(){
    console.log("submit");
  }
  selectDropDown(){
    console.log("selected");
  }

}
