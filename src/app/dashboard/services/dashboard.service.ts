import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  spiderData: any;
  constructor(private httpClient: HttpClient) { }
  getSpiderChart(){
    return  this.httpClient.get('assets/spiderData.json')
  }
  getMapData(){
    return this.httpClient.get('assets/mapData.json')
  }
  getBarChartData(){
    return this.httpClient.get('assets/spiderData.json')
  }
  getLineChartData(){
    return this.httpClient.get('assets/lineChartData.json');
  }
}