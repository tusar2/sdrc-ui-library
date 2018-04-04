import { Routes, RouterModule } from'@angular/router';
import { ModuleWithProviders } from'@angular/core';
import { HeaderComponent } from './fragments/header/header.component';
import { FooterComponent } from './fragments/footer/footer.component';

export const routes: Routes = [
    { path: 'footer', pathMatch: 'full', component: FooterComponent},
    { path: 'header', pathMatch: 'full', component: HeaderComponent},
    { path: 'data-entry/selection', loadChildren: './data-entry/data-entry.module#DataEntryModule' }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);