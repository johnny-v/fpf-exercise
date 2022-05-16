import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@main/main.model';
import { selectUsers } from '@store/selectors/main.selectors';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-files',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$: Observable<{ [key: string]: User }> = this.store.select(selectUsers);

  constructor(private store: Store) { }
}
