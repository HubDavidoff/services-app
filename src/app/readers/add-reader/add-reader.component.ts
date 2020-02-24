import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/services/readerService/reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  constructor(private context : ReaderService, private router : Router) { }

  ngOnInit() {
  }

  create(form){
    this.context.readerData.push({name: form.value.name, books: []});
    this.router.navigate(['/index']);
  }

}
