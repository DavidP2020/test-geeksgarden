import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { SparepartsComponent } from './spareparts/spareparts.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { DialogAssetsComponent } from './dialog-assets/dialog-assets.component';
import { DialogSparepartsComponent } from './dialog-spareparts/dialog-spareparts.component';
import { DialogConfigurationComponent } from './dialog-configuration/dialog-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AssetsComponent,
    SparepartsComponent,
    ConfigurationComponent,
    SidebarComponent,
    AssetsComponent,
    DialogAssetsComponent,
    DialogSparepartsComponent,
    DialogConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgDynamicBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
