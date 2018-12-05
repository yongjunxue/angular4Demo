import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { TableComponent } from './com/table/table.component';

//import { QueryComponent } from './com/query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFindComponent,
    TableComponent,
//    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    LoginModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
