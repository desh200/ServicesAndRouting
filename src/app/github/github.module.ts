import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@aangular/router';
import { RouterModule } from '@aangular/router';
import { HttpClientModule } from '@angular/common/http';
import { GitHubComponent } from './github.component';
import { GitHubUserComponent } from './githubuser.component';
import { GitHubService } from './github.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  declarations: [GitHubComponent, GitHubUserComponent],
  providers: [
    GitHubService, // <------------ Include here
  ],
})
export class GitHubModule {}
