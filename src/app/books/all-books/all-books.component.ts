import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/bookService/book.service';
import { BadgeService } from 'src/app/services/badgeService/badge.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  providers: [BadgeService]
})
export class AllBooksComponent implements OnInit {

  books : IBook[];
  errorMessage : string;

  constructor(private context: BookService, private badge : BadgeService) { }

  ngOnInit() {
    this.getBooks(); 
    this.getPages();
  }

  getPages(){
    this.context.getSomething(50)
    .then(
      data=>console.log("number of pages are greater than 400 <", data.toString()),
      reason=>console.log("Error: ", reason)
    )
  }

  getBooks(){
    this.context.getBooks().subscribe(books=>{this.books = books},
      error=>this.errorMessage = <any>error);
  }

  // ngOnChanges() {
  //   // this.books = this.context.bookData;
  // }
  

}
