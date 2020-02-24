import { Injectable } from '@angular/core';
import { IBook } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  favoriteBook : string;

  bookData : IBook [] = [
    {
      title: "Lord of the Rings",
      pages: 546,
      description: "The precious",
      author: "Tolkien",
      genres: ["Adventure", "Mistery"],
      status: ""
    },
    {
      title: "The Hunger Games",
      pages: 354,
      description: "The precious",
      author: "Collins",
      genres: ["Adventure", "Mistery"],
      status: ""
    }
  ];

  constructor() { }
}
