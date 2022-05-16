import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchFiles, fetchFilesError, fetchFilesSuccess,
  fetchTypes, fetchTypesError,
  fetchTypesSuccess,
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess
} from '@store/actions/main.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { MainService } from '@main/main.service';
import { User, Type, File } from '@main/main.model';

@Injectable()
export class MainEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsers),
      switchMap(() =>
        this.mainService.getUsers().pipe(
          map((users: {[key:string]: User}) => fetchUsersSuccess({ users })),
          catchError(() => of(fetchUsersError()))
        )
      )
    )
  );

  getTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTypes),
      switchMap(() =>
        this.mainService.getTypes().pipe(
          map((types: Type[]) => fetchTypesSuccess({ types })),
          catchError(() => of(fetchTypesError()))
        )
      )
    )
  );

  getFiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFiles),
      switchMap(() =>
        this.mainService.getFiles().pipe(
          map((files: File[]) => fetchFilesSuccess({ files })),
          catchError(() => of(fetchFilesError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private mainService: MainService){}
}
