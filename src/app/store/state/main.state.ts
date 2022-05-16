import {Type, User, File} from '@main/main.model';

export interface MainState {
  users: {[key: string]: User};
  usersPending: boolean;
  files: File[];
  filesPending: boolean;
  types: Type[];
  typesPending: boolean;
  activeType: string | null;
  searchValues: string | null;
}
