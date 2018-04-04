import { Routes, RouterModule } from'@angular/router';
import { ModuleWithProviders } from'@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResourceComponent } from './resource/resource.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: '', pathMatch: 'full', component: AboutUsComponent},
    { path: '', pathMatch: 'full', component: GalleryComponent},
    { path: '', pathMatch: 'full', component: ResourceComponent},
    { path: '', pathMatch: 'full', component: ContactUsComponent}
    
    
  
    // { path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule' }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);