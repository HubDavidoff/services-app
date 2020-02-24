import { Injectable } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  favoriteBook : string;

  // bookData : IBook [] = [];

  constructor(private http : HttpClient) { }

  getBooks() : Observable<IBook[]>{
    return this.http.get<IBook[]>("http://localhost:3000/get-books/")
    .pipe(catchError(this.handleError));
  }

  getSomething(pages: number) : Promise<string>{
    return new Promise((resolve, reject) =>{
      if(pages > 400)
        resolve(pages.toString());
      else
        reject("Promise got rejected");
      }
    );
  }
  
  private handleError(err : HttpErrorResponse){
    console.log(err.message);  
    return Observable.throw(err.message);
} 
}
