import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

import { GitHubComponent } from './github.component';
import { GitHubUserComponent } from './githubuser.component';
import { AuthGuard } from './auth-guard.service';
export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'GitHub', component: GitHubComponent, canActivate: [AuthGuard] },
  { path: 'GitHub/user/:login/:score', component: GitHubUserComponent },
  { path: '**', component: NotFoundComponent },
]);
