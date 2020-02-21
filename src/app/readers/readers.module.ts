import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReadersComponent } from './all-readers/all-readers.component';



@NgModule({
  declarations: [
    AllReadersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllReadersComponent
  ]
})
export class ReadersModule { }
