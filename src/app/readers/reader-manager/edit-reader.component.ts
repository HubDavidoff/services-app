import { Component, OnInit } from '@angular/core';
import { IReader } from 'src/app/models/readers';
import { ReaderService } from 'src/app/services/reader.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styleUrls: ['./edit-reader.component.css']
})
export class EditReaderComponent implements OnInit {

  reader : IReader;
  id : string;
  errorMessage : string;
  readerName : string;

  constructor(private context : ReaderService, private route : ActivatedRoute, private router : Router) {
    this.id = this.route.snapshot.paramMap.get("id");  
  }

  set name (value : string){
    this.readerName = value;
  }

  ngOnInit() {
    this.context.getReaderById(this.id)
    .subscribe(data=> this.reader = data,
      error=>this.errorMessage = <any>error);
  }

  submit(){
    this.reader.name = this.readerName;
    this.context.editReader(this.reader)
    .subscribe(data=>console.log(data),
    error=>this.errorMessage = <any>error);
    this.router.navigate(['/index']);
  }

  cancel(){
    this.router.navigate(['/index']);
  }
}
