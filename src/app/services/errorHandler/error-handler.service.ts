import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler{
  
  constructor() { }

  handleError(error: any): void {
    let anError : string = "This is an Error";
    console.log(anError)
  }

}
