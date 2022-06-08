import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsEditComponent } from './subjects-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsEditRoutingModule { }
