import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private context : BookService, private router : Router ) { }

  ngOnInit() {
  }

  create(form){
    this.context.bookData.push({title: form.value.title, pages: 254, description: "Some description", author: form.value.author, genres: ["Action", "Adventure"]});
    this.router.navigate(['/index']);
  }

//   create(form) {
//     console.log("this is the body:")
//     console.log(form.value)
//     this.context.postPerson(form.value)
//     .subscribe(response => this.posts = response);
//     console.log("this is a response:")
//     console.log(this.posts);
// }

}
