import { Injectable } from '@angular/core';

@Injectable()
export class BadgeService {

  constructor() { }

  getBookSellerStatus(name : string):string{
    if(name == "The Hunger Games"){
      return "Best-seller";
    }else if(name=="Lord of the Rings"){
      return "Another Best-seller";
    }else{
      return "Not a best-seller";
    }
  }
}
