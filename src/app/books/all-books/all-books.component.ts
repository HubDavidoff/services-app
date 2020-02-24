import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/bookService/book.service';
import { BadgeService } from 'src/app/services/badgeService/badge.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  providers: [BadgeService]
})
export class AllBooksComponent implements OnInit, OnChanges {

  books : IBook[];
  status : string;

  constructor(private context: BookService, private badge : BadgeService) { }

  ngOnInit() {
    this.books = this.context.bookData;
    this.books.forEach(element => {element.status = this.badge.getBookSellerStatus(element.title);
    });
  }

  ngOnChanges() {
    this.books = this.context.bookData;
  }
  

}
