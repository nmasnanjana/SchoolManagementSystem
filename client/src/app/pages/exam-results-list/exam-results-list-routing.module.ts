import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamResultsListComponent } from './exam-results-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExamResultsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamResultsListRoutingModule { }
