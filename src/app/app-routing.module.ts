import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent }  from './form/form.component';
import { BookComponent }  from './book.component';
import { AddBookComponent }  from './addbook.component';
import { BookDetailComponent }  from './book-detail.component';

const routes: Routes = [
	{
	   path: 'book',
	   component: BookComponent,
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
	   path: '',
	   redirectTo: '/book',
	   pathMatch: 'full'
	},	
	{
	   path: 'form',
	   component: FormComponent
	},
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