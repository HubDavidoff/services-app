import { Injectable } from '@angular/core';
import { IReader } from 'src/app/models/readers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {


  getReaders() : Observable<IReader[]>{
    return
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

  constructor() { }
}
