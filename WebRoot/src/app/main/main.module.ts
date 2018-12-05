import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamVerifyComponent } from './exam-verify/exam-verify.component';
import { QueryComponent } from '../com/query/query.component';
import { Query2Component } from '../com/query2/query2.component';
import { GridComponent } from '../com/grid/grid.component';
import { PageComponent } from '../com/page/page.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [MainComponent, TopComponent, LeftComponent, RightComponent, ExamListComponent, ExamVerifyComponent, QueryComponent,Query2Component, GridComponent,PageComponent, PaginationComponent],
  imports: [
  	NgZorroAntdModule,
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class MainModule { }
