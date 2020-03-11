import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-most-popular-book',
  templateUrl: './most-popular-book.component.html',
  styleUrls: ['./most-popular-book.component.css']
})
export class MostPopularBookComponent implements OnInit {

  book : IBook;
  errorMessage : string;

  constructor(private context : BookService) { }

  ngOnInit() {
    this.book = this.context.mostPopular;
  }

}
