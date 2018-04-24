import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { BarchartModel } from '../models/barchart.model';
import { GoogleMapModel } from '../models/google-map.model';

@Component({
  selector: 'sdrc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  spiderData: any;
  mapData: any;
  lineChartData:GoogleMapModel[];
  barChartData: BarchartModel;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getSpiderChart().subscribe(data=>{
      this.spiderData =  data;
    })

    this.dashboardService.getLineChartData().subscribe(data=>{
      this.lineChartData = data;
    })

    this.dashboardService.getBarChartData().subscribe(data=>{
      this.barChartData =  <BarchartModel>data;
    })

    this.dashboardService.getMapData().subscribe(data=>{
      this.mapData =  data;
    })
  }

}
