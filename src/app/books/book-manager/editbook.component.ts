import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  errorMessage: string;
  title : string;
  book : IBook;
  bookAuthor : string;

  constructor(private http : HttpClient, private context : BookService, private route : ActivatedRoute, private router : Router) {
    this.title = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getBookById(this.title);
  }

  set author(value: string){
    this.bookAuthor = value;
  }

  getBookById(id : string){
    this.context.getBookById(id)
    .subscribe(book=>this.book = book,
      error=> this.errorMessage = <any>error)
  }

  cancel(){
    this.router.navigate(['index']);
  }
  submit(){
    this.book.author = this.bookAuthor;
    this.context.editBook(this.book)
    .subscribe(data=>console.log(data + "testing edit"),
    error=>this.errorMessage = <any>error);
    this.router.navigate(['index']);
  }
}
