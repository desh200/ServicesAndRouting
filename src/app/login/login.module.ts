import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { PreventUnsavedCangesGuard } from './prevent-unsaved-changes-guard.service';

import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: [
    AuthGuard, // <------------ Include here
    LoginService,
    PreventUnsavedCangesGuard,
  ],
})
export class LoginModule {}
