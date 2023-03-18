import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User, UserService} from "../../openapi-generator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
