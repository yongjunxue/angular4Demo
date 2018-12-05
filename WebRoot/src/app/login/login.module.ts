import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
  	FormsModule,
  	ReactiveFormsModule,
    NgZorroAntdModule,

    CommonModule,
    LoginRoutingModule,
    


  ]
})
export class LoginModule { }
