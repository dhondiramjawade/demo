import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FlexModule} from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { TempComponent } from './temp/temp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent} from './map/map.component';
import { ListingUserComponent } from './user-management/listing-user/listing-user.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'temp', component: TempComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'map',
    loadChildren : () => import ('./g-map/g-map.module').then(m => m.GMapModule)
},
  { path : 'userMgt', component : ListingUserComponent},
  { path : 'createUser', component : CreateUserComponent},
  {
    path : 'projects',
    loadChildren : () => import('./project/project.module').then(m => m.ProjectModule)  // # - lazy loding of module
  },
  {
    path : 'pdf',
    loadChildren : () => import('./pdf-reader/pdf-reader.module').then(m => m.PdfReaderModule)
  },
  {
    path : 'profile',
    loadChildren : () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path : '**',
    component : FourZeroFourComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlexModule,
    HighchartsChartModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [TempComponent, DashboardComponent],
  exports : [RouterModule]
})

export class AppRoutingModule {

}