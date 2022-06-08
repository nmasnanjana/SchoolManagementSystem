import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsListComponent } from './subjects-list.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsListRoutingModule { }
