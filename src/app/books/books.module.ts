import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddBookComponent } from './add-book/add-book.component';



@NgModule({
  declarations: [
    AllBooksComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllBooksComponent
  ]
})
export class BooksModule { }
