import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';

import { ShellComponent } from './shell/shell/shell.component';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './books/book-manager/add-book.component';
import { AddReaderComponent } from './readers/add-reader/add-reader.component';
import { HttpClientModule } from '@angular/common/http';
import { EditbookComponent } from './books/book-manager/editbook.component';
import { DeleteBookComponent } from './books/book-manager/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule,
    ReadersModule,
    RouterModule.forRoot([
      {path:"index", component: ShellComponent},
      {path:"add-book", component: AddBookComponent},
      {path:"add-reader", component: AddReaderComponent},
      {path:"edit-book/:id", component: EditbookComponent},
      {path:"delete-book/:id", component: DeleteBookComponent},
      {path:'', redirectTo: 'index', pathMatch:'full'}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
