import {Component, OnInit} from '@angular/core';
import {Observable, take} from 'rxjs';
import {File, Navigation, Type, User} from '@main/main.model';
import {Store} from '@ngrx/store';
import {changeType} from '@store/actions/main.actions';
import {selectFiles, selectTypes, selectUsers} from '@store/selectors/main.selectors';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  navigations = Navigation;
  files$: Observable<File[]> = this.store.select(selectFiles);
  users$: Observable<{ [key: string]: User }> = this.store.select(selectUsers);
  types$: Observable<Type[]> = this.store.select(selectTypes);

  constructor(private store: Store) { }

  getName(id: number) {
    let name;

    this.users$.pipe(take(1)).subscribe(users => {
      const user = users[id];
      name = user ? `${user.givenName} ${user.familyName}` : '';
    });

    return name;
  }

  changeType(type: any) {
    this.store.dispatch(changeType({id: type.value ? type.value.id : null }));
  }
}
