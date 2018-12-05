import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFindComponent } from './page-not-find/page-not-find.component';


const routes: Routes = [
	{
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  	},
  	{
    path: 'main',
    loadChildren: './main/main.module#MainModule',
  	},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },  
	{ path: '**',  component: PageNotFindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
