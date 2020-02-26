import { Component, OnInit, Version, VERSION} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit{

  
  

  constructor(private title : Title) { }

  ngOnInit() {
    this.title.setTitle(`Book Tracker ${VERSION.full}`);
    
  }
  
  


}
