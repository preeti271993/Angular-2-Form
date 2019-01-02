import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
		  <li><a routerLink="/blog" routerLinkActive="active"> Blog </a></li>
          <li><a routerLink="/form" routerLinkActive="active"> Form </a></li>	
		  <li><a routerLink="/dashboard" routerLinkActive="active"> Dashboard </a></li>
		  <li><a routerLink="/highchart" routerLinkActive="active"> Highchart </a></li>   
       </ul> 
	</nav>  
	<router-outlet></router-outlet>	
  `
})
export class AppComponent { 
	
}
    