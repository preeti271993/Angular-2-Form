import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes , Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  user: User;
  constructor(public _router: Router) { }

  ngOnInit() {

    this.user = {
             UserName:"",
            Password:"",
            Email:"",
            FirstName:"",
            LastName:""
        }
  }
  
  resetForm (UserRegistrationForm? : NgForm){

  	if(UserRegistrationForm != null)
  		UserRegistrationForm.reset();
  	    this.user = {
            UserName:"",
            Password:"",
            Email:"",
            FirstName:"",
            LastName:""
  	    }
  }
  
 

  submitForm(value){
     console.log(JSON.stringify(value));
    this.resetForm();
    this._router.navigate(['/dashboard']);

    }
}
