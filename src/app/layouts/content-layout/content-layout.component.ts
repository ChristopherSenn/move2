import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '@app/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  //users: User[] = [];

  constructor() { }

  ngOnInit() {
    /*this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });*/
  }

}
