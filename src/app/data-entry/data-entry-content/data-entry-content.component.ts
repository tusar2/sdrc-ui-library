import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '../models/data-entry-form.model';
import { FormControlService } from '../services/form-control.service';
import { WebApiService } from '../services/web-api.service';
import { Router } from '@angular/router'
import { DataSharingService } from '../services/data-sharing.service';
import { log } from 'util';
declare var $: any;

@Component({
  selector: 'sdrc-data-entry-content',
  templateUrl: './data-entry-content.component.html',
  styleUrls: ['./data-entry-content.component.scss']
})
export class DataEntryContentComponent implements OnInit {
  allformData: any;
  formsData: any;
  constructor(private formControlService: FormControlService, private webApi: WebApiService, private router: Router, private formDataSave: DataSharingService) { }

  ngOnInit() {
    this.webApi.getDataEntryDetails().subscribe(Response => {
      console.log(Response);
      this.allformData = Response;
      console.log((this.allformData));
      console.log(Object.keys(this.allformData));
      for(let i=0; i< this.allformData.length; i++){
        this.formsData.push(this.allformData[i]);        
        console.log(this.formsData);
      }
    });
  }
}
