import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamResultsEditComponent } from './exam-results-edit.component';
import { ExamResultsEditRoutingModule } from './exam-results-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamResultsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamResultsEditComponent
  ]
})
export class ExamResultsEditModule { }
