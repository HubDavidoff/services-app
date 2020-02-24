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
    this.getPagesAsync(3500);
  }

  // getPages(){
  //   this.context.getSomething(500)
  //   .then( 
  //     data=>console.log(data),
  //     reason=>console.log("Error: ", reason)
  //   )
  // }

  private async getPagesAsync(pages:number): Promise<void>{
    try{
      let pagesNo : string = await this.context.getSomething(pages);
      console.log(pages)
    }
    catch(error){
      console.log(error)
    }
  }

  getBooks(){
    this.context.getBooks().subscribe(books=>{this.books = books},
      error=>this.errorMessage = <any>error);
  }

  // ngOnChanges() {
  //   // this.books = this.context.bookData;
  // }
  

}
