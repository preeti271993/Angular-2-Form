import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent }  from './form/form.component';
import { BookComponent }  from './book.component';
import { AddBookComponent }  from './addbook.component';
import { BookDetailComponent }  from './book-detail.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { BlogComponent }  from './blog/blog.component';


const routes: Routes = [
{
	   path: '',
	   component: BlogComponent
	},
	{
	   path: 'blog',
	   component: BlogComponent
	},
	{
	   path: 'form',
	   component: FormComponent
	},
	{
	   path: 'book',
	   component: BookComponent
	},
	{
	   path: 'add-book',
	   component: AddBookComponent
	},	
	{
	   path: 'book-detail',
	   component: BookDetailComponent
	},
	{
	   path: 'dashboard',
	   component: DashboardComponent
	},	
	/*{
	   path: '',
	   redirectTo: '/book',
	   pathMatch: 'full'
	},	*/

];
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 