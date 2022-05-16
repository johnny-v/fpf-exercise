export enum Navigation {
  Main = 'main',
  Files = 'files',
  Users = 'users',
}

export interface User {
  id: number;
  givenName: string;
  familyName: string;
}

export interface Type {
  creationDateTime: string;
  id: string;
  documentsCount: number;
  description: string;
  name: string;
  colourId: string;
}

export interface File {
  creationDateTime: string;
  status: string;
  modifiedBy: number;
  type: string;
  uri: string;
  version: number;
  id: string;
  fileId: string;
  scheduled: boolean;
  title: string;
  createdBy: number;
  modifiedDateTime: string;
  live: boolean;
  popularity: boolean;
}
