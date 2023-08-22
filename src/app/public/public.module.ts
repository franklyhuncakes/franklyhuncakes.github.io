import { ChartDetailsComponent } from './components/chart-details/chart-details.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';

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
