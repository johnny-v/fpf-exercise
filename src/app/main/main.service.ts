import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ApiPaths } from '@env/environment';
import { User, Type, File } from '@main/main.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<{[key: string]: User}> {
    return this.http.get<User[]>(ApiPaths.Users).pipe(
      map(users => this.convertArrayToObject(users, 'id'))
    );
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(ApiPaths.Types);
  }

  getFiles(): Observable<File[]> {
    return this.http.get<File[]>(ApiPaths.Files);
  }

  private convertArrayToObject(array: any[], key: string): any {
    return array.reduce((obj, item) => {
      obj[item[key]] = item;
      return obj;
    }, {});
  }
}
