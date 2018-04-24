import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'sdrc-report-selection',
  templateUrl: './report-selection.component.html',
  styleUrls: ['./report-selection.component.scss']
})
export class ReportSelectionComponent implements OnInit {

  selectionInputs: any;
  constructor(private httpClient: HttpClient, private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getSelectionInputs().subscribe(response => {
      this.selectionInputs = response;
    },error => {
      alert("server connection error, please try after some time")
    })
  }

}
