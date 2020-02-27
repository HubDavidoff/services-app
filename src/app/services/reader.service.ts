import { Injectable } from '@angular/core';
import { IReader } from 'src/app/models/readers';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  serverUrl : string = "http://localhost:3000/readers/"

  constructor(private http : HttpClient) { }

  getReaders() : Observable<IReader[]>{
    return this.http.get<IReader[]>(this.serverUrl)
    .pipe(catchError(this.errorHandler));
  }

  getReaderById(id : string) : Observable<IReader>{
    return this.http.get<IReader>(this.serverUrl + id)
    .pipe(catchError(this.errorHandler));
  }

  addReader(reader : IReader) : Observable<string>{
    return this.http.post<string>(this.serverUrl + "add-reader", {reader: reader})
    .pipe(catchError(this.errorHandler));
  }

  editReader(reader : IReader): Observable<string>{
    return this.http.post<string>(this.serverUrl + "edit-reader", {reader: reader})
    .pipe(catchError(this.errorHandler));
  }

  removeReader(id : string) : Observable<string>{
    return this.http.post<string>(this.serverUrl + "delete-reader", {reader: id})
    .pipe(catchError(this.errorHandler));
  }

  private errorHandler(err : HttpErrorResponse){
    console.log(err.message)
    return Observable.throw(err.message);
  }
  
  // readerData : IReader[]  = [
  //   {
  //     name: 'Katniss',
  //     books: []
  //   },
  //   {
  //     name: 'Frodo',
  //     books:[]
  //   }
  // ]
}
