import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


import { IBook } from '../models/book'
import { catchError } from 'rxjs/operators';

@Injectable()
export class BookResolverService implements Resolve<IBook[]> {

  books : IBook[];
  errorMessage: any;

  constructor(private context : BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBook[]> {
    return this.context.getBooks()
    .pipe(catchError(err=>of(err)));
  }

}
