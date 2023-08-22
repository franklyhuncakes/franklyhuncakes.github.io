import { RouterModule, Routes } from '@angular/router';

import { ChartDetailsComponent } from './public/components/chart-details/chart-details.component';
import { HomeComponent } from './public/components/home/home.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './public/components/projects/projects.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'chart-details', component: ChartDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
