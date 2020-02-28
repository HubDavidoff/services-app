import { Injectable } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookTrackerError } from '../models/bookTrackerError';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  favoriteBook : string;
  serverUrl : string = "http://localhost:3000";
  // postUrl : string = "http://localhost:3000/books/add";
  // bookData : IBook [] = [];

  constructor(private http : HttpClient) {}

  getBooks() : Observable<IBook[]>{
    return this.http.get<IBook[]>(this.serverUrl + "/books/")
    .pipe(catchError(this.handleError));
  }

  getBookById(id : string) : Observable<IBook>{
    let getHeader : HttpHeaders = new HttpHeaders({
      'Accept' : 'application/json'
    });
    return this.http.get<IBook>(this.serverUrl + "/books/" + id , {headers : getHeader})
    .pipe(catchError(this.handleError));
  }

  addBook(bookToAdd : IBook) : Observable<string>{
    return this.http.post<string>(this.serverUrl + "/books/add", {book: bookToAdd})
    .pipe(catchError(this.handleError));
  }

  editBook(bookToEdit : IBook) : Observable<string>{
    return this.http.post<string>(this.serverUrl + "/books/edit", {book: bookToEdit})
    .pipe(catchError(this.handleError));
  }

  deleteBook(bookToDelete : string) : Observable<string>{
    return this.http.post<string>(this.serverUrl + "/books/delete", {book: bookToDelete})
    .pipe(catchError(this.handleError))
  }

  private handleError(err : HttpErrorResponse){
    let errorData = err.message + ". Hueston, we have a problem"
    console.log(errorData)
    return Observable.throw(err.message);
  } 

  // getSomething(pages: number) : Promise<string>{
  //   return new Promise((resolve, reject) =>{
  //     if(pages > 400){
  //       resolve(pages.toString());
  //     }
  //     else
  //       reject("Promise got rejected");
  //     }
  //   );
  // }
}
