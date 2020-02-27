import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBook : IBook;
  response : Object;

  constructor(private context : BookService, private router : Router ) { }

  ngOnInit() {
  }

  create(form){
    this.newBook = {title: form.value.title, pages: 254, description: "Some description", author: form.value.author, genres: ["Action", "Adventure"], status: ""};
    this.context.addBook(this.newBook)
    .subscribe(response=>this.response = response);
    this.router.navigate(['/index']);
  }



}
