import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsListRoutingModule } from './subjects-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SubjectsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SubjectsListComponent
  ]
})
export class SubjectsListModule { }
