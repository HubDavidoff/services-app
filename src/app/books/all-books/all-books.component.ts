import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html'
})
export class AllBooksComponent implements OnInit {

  books : IBook[];
  book : IBook;
  errorMessage : string;
  title : string = "";

  constructor(private context: BookService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.books = this.route.snapshot.data['resolvedBooks'];
    // this.getPagesAsync(3500);
  }

  getBooks(){
    this.context.getBooks().subscribe(books=>{this.books = books},
      error=>this.errorMessage = <any>error);
  }

  editClicked(book : IBook){
    let id = book.title;
    this.router.navigate([`/edit-book/${id}`]);
  }

  deleteClicked(book : IBook){
    let id = book.title;
    this.router.navigate([`/delete-book/${id}`]);
  }

  // getPages(){
  //   this.context.getSomething(500)
  //   .then( 
  //     data=>console.log(data), 
  //     reason=>console.log("Error: ", reason)
  //   )
  // }

  // ngOnChanges() {
  //   // this.books = this.context.bookData;
  // }
  
  // private async getPagesAsync(pages:number): Promise<void>{
  //   try{
  //     let pagesNo : string = await this.context.getSomething(pages);
  //     console.log(pages)
  //   }
  //   catch(error){       
  //     console.log(error)
  //   }
  // }
}
