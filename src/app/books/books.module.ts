import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllBooksComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AllBooksComponent
  ]
})
export class BooksModule { }
