import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'sdrc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  spiderData: any;
  mapData: any;
  lineChartData:any;
  barChartData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getSpiderChart().subscribe(data=>{
      this.spiderData =  data;
    })

    this.dashboardService.getLineChartData().subscribe(data=>{
      this.lineChartData = data;
    })

    this.dashboardService.getBarChartData().subscribe(data=>{
      this.barChartData =  data;
    })

    this.dashboardService.getMapData().subscribe(data=>{
      this.mapData =  data;
    })
  }

}
