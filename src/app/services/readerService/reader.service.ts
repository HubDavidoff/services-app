import { Injectable } from '@angular/core';
import { IReader } from 'src/app/models/readers';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  readerData : IReader[]  = [
    {
      name: 'Katniss',
      books: []
    }
  ]

  constructor() { }
}
