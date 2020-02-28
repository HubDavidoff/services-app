import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';

import { ShellComponent } from './shell/shell/shell.component';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './books/book-manager/add-book.component';
import { AddReaderComponent } from './readers/reader-manager/add-reader.component';
import { HttpClientModule } from '@angular/common/http';
import { EditbookComponent } from './books/book-manager/editbook.component';
import { DeleteBookComponent } from './books/book-manager/delete-book.component';
import { EditReaderComponent } from './readers/reader-manager/edit-reader.component';
import { DeleteReaderComponent } from './readers/reader-manager/delete-reader.component';
import { BookResolverService } from './services/book-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule,
    ReadersModule,
    RouterModule.forRoot([
      {path:"index", component: ShellComponent, resolve: {resolvedBooks : BookResolverService}},
      {path:"add-book", component: AddBookComponent},
      {path:"edit-book/:id", component: EditbookComponent},
      {path:"delete-book/:id", component: DeleteBookComponent},
      {path:"add-reader", component: AddReaderComponent},
      {path:"edit-reader/:id", component: EditReaderComponent},
      {path:"delete-reader/:id", component:DeleteReaderComponent},
      {path:'', redirectTo: 'index', pathMatch:'full'}
    ])

  ],
  providers: [BookResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
