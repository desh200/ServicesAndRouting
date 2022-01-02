import { Component, VERSION } from '@angular/core';
import { GitHubService } from './github/github.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitHubService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  firstname = 'Hello what?';
  giveMeRed = 'red';
  SearchControl = new FormControl();
  UserName = '';
  getTitle(): string {
    return this.firstname;
  }

  isLoading = true;
  users = [];
  constructor(private _githubService: GitHubService) {}

  max(first: number, second: number): number {
    return Math.max(first, second);
  }

  ngOnInit() {
    this.UserName = 'greg';

    this.SearchControl.valueChanges
      .pipe(
        filter((text) => text.length >= 3),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.isLoading = true;
        this._githubService.getGitHubData(value).subscribe((data: any) => {
          this.isLoading = false;
          this.users = data.items;
        });
      });
  }
}
