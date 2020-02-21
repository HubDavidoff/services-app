import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';



@NgModule({
  declarations: [
    AllBooksComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllBooksComponent
  ]
})
export class BooksModule { }
