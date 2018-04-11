import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user-management.routing';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WebApiService } from './services/web-api.service';
import { UserFormControlService } from './services/user-form-control.service';
import { UserDataSharingService } from './services/user-data-sharing.service';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [UserLoginComponent, UserRegistrationComponent],
  exports: [UserLoginComponent, UserRegistrationComponent],
  providers: [WebApiService, UserFormControlService, UserDataSharingService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserManagementModule { }
