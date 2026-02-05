import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-library-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './library-form.html',
  styleUrl: './library-form.css',
  standalone: true
})
export class LibraryForm {
    fname=new FormControl('')
    lname=new FormControl('')
  constructor() { }

  onSubmit(event:any) {
    alert(this.fname.value);
    alert(this.lname.value);    
  }
}
