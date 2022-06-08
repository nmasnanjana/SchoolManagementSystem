import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamResultsListComponent } from './exam-results-list.component';
import { ExamResultsListRoutingModule } from './exam-results-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamResultsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamResultsListComponent
  ]
})
export class ExamResultsListModule { }
