import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { LoginModule } from './login/login.module';
import { GitHubModule } from './github/github.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    GitHubModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
