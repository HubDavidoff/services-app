import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/models/books';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  books : IBooks[] = [
    {
      title: "Lord of the Rings",
      pages: 546,
      description: "The precious",
      author: "Rowling",
      genres: ["Adventure", "Mistery"]
    },
    {
      title: "The Hunger Games",
      pages: 354,
      description: "The precious",
      author: "Rowling",
      genres: ["Adventure", "Mistery"]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
