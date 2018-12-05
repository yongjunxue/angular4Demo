import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamVerifyComponent } from './exam-verify/exam-verify.component';

const routes: Routes = [
	{path: '',component: MainComponent,children: [
		{
	       	path: '',
	        component: RightComponent,
	        children: [
				{path: 'examList',component: ExamListComponent},
				{path: 'examVerify',component: ExamVerifyComponent},
	        ]
    	}
		
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
