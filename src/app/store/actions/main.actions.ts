import { createAction, props } from '@ngrx/store';
import { User, Type, File } from '@main/main.model';

export const fetchUsers = createAction('[Main Component] Fetch Users');
export const fetchUsersSuccess = createAction('[Main Component] Fetch Users Success', props<{ users: {[key: string]: User }}>());
export const fetchUsersError = createAction('[Main Component] Fetch Users Error');

export const fetchTypes = createAction('[Main Component] Fetch Types');
export const fetchTypesSuccess = createAction('[Main Component] Fetch Types Success', props<{ types: Type[]}>());
export const fetchTypesError = createAction('[Main Component] Fetch Types Error');

export const fetchFiles = createAction('[Main Component] Fetch Files');
export const fetchFilesSuccess = createAction('[Main Component] Fetch Files Success', props<{ files: File[]}>());
export const fetchFilesError = createAction('[Main Component] Fetch Files Error');

export const changeType = createAction('[Main Component] Change Type', props<{ id: string}>());
export const searchFiles = createAction('[Main Component] Search Files', props<{ values: string}>());
