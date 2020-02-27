import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  bookForDeletion : string;
  errorMessage: string;

  constructor(private http: HttpClient, private router : Router, private route : ActivatedRoute, private context: BookService) { 
    this.bookForDeletion = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  confirm(){
    this.context.deleteBook(this.bookForDeletion)
    .subscribe(data=>console.log(data),
    error=>this.errorMessage = <any>error);
    this.router.navigate(['index']);
  }

  cancel(){
    this.router.navigate(['index']);
  }

}
