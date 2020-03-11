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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditbookComponent } from './books/book-manager/editbook.component';
import { DeleteBookComponent } from './books/book-manager/delete-book.component';
import { EditReaderComponent } from './readers/reader-manager/edit-reader.component';
import { DeleteReaderComponent } from './readers/reader-manager/delete-reader.component';
import { BookResolverService } from './services/book-resolver.service';
import { AddHeaderInterceptor } from './services/add-header.interceptor';
import { ResponseInterceptor } from './services/response.interceptor';
import { CacheInterceptor } from './services/cache.interceptor';
import { HttpCacheService } from './services/http-cache.service';
import { BookService } from './services/book.service';
import { ReaderService } from './services/reader.service';
import { MostPopularBookComponent } from './books/book-manager/most-popular-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MostPopularBookComponent
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
  providers: [
  BookResolverService,
  HttpCacheService,
  BookService,
  ReaderService,
  {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
  HttpCacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
