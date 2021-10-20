import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAboutNodeComponent} from './pages/page-about-node/page-about-node.component';
import { PageDataComponent } from './pages/page-data/page-data.component';
import { PageGoalsComponent } from './pages/page-goals/page-goals.component';
import {PageHomeComponent} from './pages/page-home/page-home.component';

const routes: Routes = [
  {
    path: 'objetivos',
    component: PageGoalsComponent
  },
  {
    path: 'fuentes',
    component: PageDataComponent
  },
  {
    path: 'about/:id',
    component: PageAboutNodeComponent
  },
  { path: '', component: PageHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
