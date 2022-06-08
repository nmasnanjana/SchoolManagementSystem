import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsEditComponent } from './subjects-edit.component';
import { SubjectsEditRoutingModule } from './subjects-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SubjectsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SubjectsEditComponent
  ]
})
export class SubjectsEditModule { }
