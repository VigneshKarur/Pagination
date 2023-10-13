import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { SummaryDashboardComponent } from './summary-dashboard/summary-dashboard.component';
import { DetailDashboardComponent } from './detail-dashboard/detail-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  {path: '', component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'summary-dashboard', component: SummaryDashboardComponent,canActivate: [AuthGuard]},
  {path: 'detail-dashboard', component: DetailDashboardComponent,canActivate: [AuthGuard]},
  {path: 'reports', component: ReportsComponent,canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent,canActivate: [AuthGuard]},
  
      
      
      
      
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
