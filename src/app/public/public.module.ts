import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
  
    HomeComponent,
       ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
