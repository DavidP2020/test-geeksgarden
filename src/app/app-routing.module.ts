import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SparepartsComponent } from './spareparts/spareparts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: {
      title: 'home',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        }
      ]
    },
  },
  {
    path: 'assets', component: AssetsComponent, canActivate: [AuthGuard], data: {
      title: 'assets',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Assets',
          url: ''
        }
      ]
    },
  },
  {
    path: 'spareparts', component: SparepartsComponent, canActivate: [AuthGuard], data: {
      title: 'spareparts',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Spareparts',
          url: ''
        }
      ]
    }
  },
  {
    path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard], data: {
      title: 'configuration',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home'
        },
        {
          label: 'Configuration',
          url: ''
        }
      ]
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
