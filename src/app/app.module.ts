import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { LoginModule } from './login/login.module';
import { GitHubModule } from './github/github.module';
import { routing } from './app.routing';
import { GitHubRouting } from './github.routing';
@NgModule({
  imports: [BrowserModule, LoginModule, GitHubModule, routing, GitHubRouting],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
