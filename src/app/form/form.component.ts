import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit() {

    this.user = {
             UserName:"Username",
            Password:"Password",
            Email:"Email",
            FirstName:"Firstname",
            LastName:"Lastname"
        }
  }
  
  resetForm (form? : NgForm){
  	if(form != null)
  		form.reset();
  	    this.user = {
            UserName:"Username",
            Password:"Password",
            Email:"Email",
            FirstName:"Firstname",
            LastName:"Lastname"
  	    }
  }
  
  submitForm(value){
     console.log(JSON.stringify(value));
  }
}
