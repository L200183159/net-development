import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { FoodsComponent } from './foods/foods.component';

const routes : Routes= [
  {
    path :'',component:MainComponent,
    children:[
      {
        path:'',
        redirectTo:'/admin/home',
        pathMatch:'full'
      },
      {
        path:'home', component:HomeComponent 
      },      
      {
        path:'list-foods', component:FoodsComponent 
      },
      {
        path:'settings', component:SettingsComponent 
      },
    ]
  }
]



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SettingsComponent,
    FoodsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild(routes) 
  ]
})
export class AdministratorModule { }
