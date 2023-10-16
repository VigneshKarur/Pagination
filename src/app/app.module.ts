import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';


import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SummaryDashboardComponent } from './summary-dashboard/summary-dashboard.component';
import { DetailDashboardComponent } from './detail-dashboard/detail-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { PaginationComponent } from './pagination/pagination.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    SummaryDashboardComponent,
    DetailDashboardComponent,
    SettingsComponent,
    ReportsComponent,
    PaginationComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
