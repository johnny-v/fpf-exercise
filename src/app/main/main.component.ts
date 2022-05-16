import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {fetchFiles, fetchTypes, fetchUsers, searchFiles} from '@store/actions/main.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items = [
    {
      label: 'Files',
      icon: 'pi pi-fw pi-file',
      routerLink: ['files']
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      routerLink: ['users']
    }
  ];

  home() {
    this.router.navigate(['/']);
  }

  constructor(public router: Router, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(fetchFiles());
    this.store.dispatch(fetchUsers());
    this.store.dispatch(fetchTypes());
  }

  searchFiles(values: string) {
    this.store.dispatch(searchFiles( {values}));
  }

}
