import { MainState } from '@store/state/main.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {searchFiles} from "@store/actions/main.actions";

export const selectMainState = createFeatureSelector<MainState>('main');

export const selectMainPageState = createSelector(selectMainState, (mainState) => mainState);

export const selectActiveType = createSelector(selectMainPageState, ({activeType}) => activeType);
export const selectSearch = createSelector(selectMainPageState, ({searchValues}) => searchValues);

export const selectFiles = createSelector(selectMainPageState, selectActiveType, selectSearch,
  ({files}, type, searchFiles) => {

    let filteredFiles = type ? files.filter(file => file.type === type) : files;

    return searchFiles ? filteredFiles.filter(file => file.title.toLowerCase().includes(searchFiles.toLowerCase())) :
      filteredFiles;
});
export const selectPendingFiles = createSelector(selectMainPageState, ({filesPending}) => filesPending);
export const selectTypes = createSelector(selectMainPageState, ({types}) => types);
export const selectPendingTypes = createSelector(selectMainPageState, ({typesPending}) => typesPending);
export const selectUsers = createSelector(selectMainPageState, ({users}) => users);
export const selectPendingUsers = createSelector(selectMainPageState, ({usersPending}) => usersPending);
