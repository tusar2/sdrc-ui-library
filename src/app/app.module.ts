import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataEntryModule } from './data-entry/data-entry.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportModule } from './report/report.module';
import { UserManagementModule } from './user-management/user-management.module';
import { StaticModule } from './static/static.module';
import { HeaderComponent } from './fragments/header/header.component';
import { FooterComponent } from './fragments/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DataEntryModule,
    DashboardModule,
    ReportModule,
    UserManagementModule,
    StaticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
