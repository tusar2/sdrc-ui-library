import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';

@Injectable()
export class ReportService {

  constructor(private httpClient: HttpClient) { }

  getSelectionInputs(){
    return this.httpClient.get('assets/report-selection.json')
  }
}
