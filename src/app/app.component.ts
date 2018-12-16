import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
        
		 <li><a routerLink="/form" routerLinkActive="active">Form</a></li>
		  <li><a routerLink="/book" routerLinkActive="active">Book</a></li>	  
         <li><a routerLink="/add-book" routerLinkActive="active">Add Book</a></li>			 
		 <li><a routerLink="/book-detail" routerLinkActive="active">Book Details</a></li>
	  </ul> 
	</nav>  
	<router-outlet></router-outlet>	
  `
})
export class AppComponent { 
}
    