import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReadersComponent } from './all-readers/all-readers.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllReadersComponent,
    AddReaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AllReadersComponent
  ]
})
export class ReadersModule { }
