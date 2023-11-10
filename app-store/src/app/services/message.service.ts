import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  // function to show message
  add(message: string) {
    //display message in a html element using material snackbar
    this.snackBar.open(message, 'Close', { duration: 2000 });
  }
}
