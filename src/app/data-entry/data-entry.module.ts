import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntrySelectionComponent } from './data-entry-selection/data-entry-selection.component';
import { DataEntryHeadComponent } from './data-entry-head/data-entry-head.component';
import { routing } from './data-entry.routing';
import { FormControlService } from './services/form-control.service';
import { WebApiService } from './services/web-api.service';
import { DataSharingService } from './services/data-sharing.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DataEntrySelectionComponent, DataEntryHeadComponent],
  exports: [DataEntrySelectionComponent, DataEntryHeadComponent],
  providers: [FormControlService, WebApiService, DataSharingService]
})
export class DataEntryModule { }
