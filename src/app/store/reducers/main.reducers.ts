import { createReducer, on } from '@ngrx/store';
import {
  changeType,
  fetchFiles,
  fetchFilesError,
  fetchFilesSuccess,
  fetchTypes,
  fetchTypesSuccess,
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess, searchFiles
} from '@store/actions/main.actions';
import { MainState  } from '@store/state/main.state';

export const initialState: MainState = {
  users: {},
  usersPending: false,
  types: [],
  typesPending: false,
  files: [],
  filesPending: false,
  activeType: null,
  searchValues: null
};

export const mainReducers = createReducer(
  initialState,
  on(fetchUsers, (state) => ({ ...state, usersPending: true })),
  on(fetchUsersSuccess, (state, {users}) => ({ ...state, usersPending: false, users })),
  on(fetchUsersError, (state) => ({ ...state, usersPending: false, users: {} })),

  on(fetchTypes, (state) => ({ ...state, usersPending: true })),
  on(fetchTypesSuccess, (state, { types }) => ({ ...state, typesPending: false, types })),
  on(fetchTypes, (state) => ({ ...state, typesPending: false, types: [] })),

  on(fetchFiles, (state) => ({ ...state, filesPending: true })),
  on(fetchFilesSuccess, (state, { files }) => ({ ...state, filesPending: false, files })),
  on(fetchFilesError, (state) => ({ ...state, filesPending: false, files: [] })),

  on(changeType, (state, {id}) => ({ ...state, activeType: id })),
  on(searchFiles, (state, {values}) => ({ ...state, searchValues: values })),
);
