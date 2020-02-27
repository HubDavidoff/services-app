import { Component, OnInit } from '@angular/core';
import { IReader } from 'src/app/models/readers';
import { ReaderService } from 'src/app/services/reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-readers',
  templateUrl: './all-readers.component.html'
})
export class AllReadersComponent implements OnInit {

  readers : IReader[];
  errorMessage: any;

  constructor(private context : ReaderService, private router: Router) { }

  ngOnInit() {
    this.context.getReaders()
    .subscribe(readers=>this.readers = readers,
      error=>this.errorMessage = <any>error)
  }

  editClicked(reader : IReader){
    let id = reader.id;
    this.router.navigate([`/edit-reader/${id}`]);
  }

  deleteClicked(reader : IReader){
    let id = reader.id;
    this.router.navigate([`/delete-reader/${id}`]);
  }


}
