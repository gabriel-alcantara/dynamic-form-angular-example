import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormModule } from '../modules/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  exports: [DynamicFormModule],
})
export class SharedModule { }
