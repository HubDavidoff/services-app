import { Component, OnInit } from '@angular/core';
import { IReader } from 'src/app/models/readers';

@Component({
  selector: 'app-all-readers',
  templateUrl: './all-readers.component.html',
  styleUrls: ['./all-readers.component.css']
})
export class AllReadersComponent implements OnInit {

  readers : IReader[] = [
    {
      name: 'Robin',
      books: []
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
