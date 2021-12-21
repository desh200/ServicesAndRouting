import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <h1>User Login: {{login}}</h1>
  <h1>User Score: {{score}}</h1>
  `,
})
export class GitHubUserComponent {
  login;
  score;
  subscription;

  constructor(private _route: ActivatedRoute) {}
}
