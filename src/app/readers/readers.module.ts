import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReadersComponent } from './all-readers/all-readers.component';
import { AddReaderComponent } from './reader-manager/add-reader.component';
import { FormsModule } from '@angular/forms';
import { EditReaderComponent } from './reader-manager/edit-reader.component';
import { DeleteReaderComponent } from './reader-manager/delete-reader.component';

@NgModule({
  declarations: [
    AllReadersComponent,
    AddReaderComponent,
    EditReaderComponent,
    DeleteReaderComponent
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
