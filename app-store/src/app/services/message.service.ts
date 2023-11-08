import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  // function to show message
  add(message: string) {
    alert(message);
  }
}
