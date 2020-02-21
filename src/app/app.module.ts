import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { BooksModule } from './books/books.module';
import { AllReadersComponent } from './readers/all-readers/all-readers.component';
import { ReadersModule } from './readers/readers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    ReadersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
