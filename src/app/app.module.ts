import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubComponent } from './github.component';
import { GitHubUserComponent } from './githubuser.component';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    GitHubUserComponent,
    LoginComponent,
  ],
  providers: [
    AuthGuard, // <------------ Include here
    LoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
