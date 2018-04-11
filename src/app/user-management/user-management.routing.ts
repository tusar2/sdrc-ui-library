import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

export const routes: Routes = [
    { 
        path: 'login',   
        component: UserLoginComponent,
        pathMatch: 'full'
    },    
    { 
        path: 'registration',   
        component: UserRegistrationComponent,
        pathMatch: 'full'
    } 
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);