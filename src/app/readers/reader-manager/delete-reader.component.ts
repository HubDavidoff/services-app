import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/services/reader.service';
import { IReader } from 'src/app/models/readers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-reader',
  templateUrl: './delete-reader.component.html',
  styleUrls: ['./delete-reader.component.css']
})
export class DeleteReaderComponent implements OnInit {

  readerToDelete : IReader;
  readerId : string;
  errorMessage : string;

  constructor(private context : ReaderService, private route : ActivatedRoute, private router : Router) {
    this.readerId = this.route.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.context.getReaderById(this.readerId)
    .subscribe(data=> this.readerToDelete = data,
      error=>this.errorMessage = <any>error);
  }

  confirm(){
    this.context.removeReader(this.readerToDelete.id)
    .subscribe(data=>console.log(data));
    this.router.navigate(["/index"]);
  }

  cancel(){
    this.router.navigate(["/index"]);
  }

  

}
