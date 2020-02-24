import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';

import { ShellComponent } from './shell/shell/shell.component';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { AddReaderComponent } from './readers/add-reader/add-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,

    ReadersModule,
    RouterModule.forRoot([
      {path:"index", component: ShellComponent},
      {path:"add-book", component: AddBookComponent},
      {path:"add-reader", component: AddReaderComponent},
      {path:'', redirectTo: 'index', pathMatch:'full'}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
