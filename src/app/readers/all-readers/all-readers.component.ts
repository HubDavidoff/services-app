import { Component, OnInit } from '@angular/core';
import { IReader } from 'src/app/models/readers';
import { ReaderService } from 'src/app/services/readerService/reader.service';

@Component({
  selector: 'app-all-readers',
  templateUrl: './all-readers.component.html',
  styleUrls: ['./all-readers.component.css'],
})
export class AllReadersComponent implements OnInit {

  readers : IReader[];

  constructor(private context : ReaderService) { }

  ngOnInit() {
    this.readers = this.context.readerData;
  }

}
