import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamResultsEditComponent } from './exam-results-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExamResultsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamResultsEditRoutingModule { }
