import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ChartDetailsComponent } from './components/chart-details/chart-details.component';

@NgModule({
  declarations: [
  
    HomeComponent,
       ProjectsComponent,
       ChartDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
