import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntrySelectionComponent } from './data-entry-selection/data-entry-selection.component';
import { DataEntryHeadComponent } from './data-entry-head/data-entry-head.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataEntrySelectionComponent, DataEntryHeadComponent],
  exports: [DataEntrySelectionComponent, DataEntryHeadComponent]
})
export class DataEntryModule { }