import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddBookComponent } from './book-manager/add-book.component';
import { FormsModule } from '@angular/forms';
import { DeleteBookComponent } from './book-manager/delete-book.component';

@NgModule({
  declarations: [
    AllBooksComponent,
    AddBookComponent,
    DeleteBookComponent
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
