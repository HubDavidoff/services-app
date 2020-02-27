import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/services/reader.service';
import { Router } from '@angular/router';
import { IReader } from 'src/app/models/readers';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  reader : IReader;
  errorMessage: any;

  constructor(private context : ReaderService, private router : Router) { }

  ngOnInit() {
  }

  create(form){
    this.reader = {name: form.value.name, id : "5", age: 23, minutesReading: 243}
    console.log(this.reader)
    this.context.addReader(this.reader)
    .subscribe(data=>console.log(data),
    error=>this.errorMessage = <any>error);
    this.router.navigate(['/index']);
  }

  // create(form){
  //   this.context.readerData.push({name: form.value.name, books: []});
  //   this.router.navigate(['/index']);
  // }

}
