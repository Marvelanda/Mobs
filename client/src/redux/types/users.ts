import { ModalState } from './placesTypes';

export enum Types {
  GETUSER = 'GETUSER',
  ADDUSER = 'ADDUSER',
  REMOVEUSER = 'REMOVEUSER',
  USERRATING = 'USERRATING',
}

export interface UserState {
  userName?: string;
  status: boolean;
  error?: string;
}

export interface UserRatingState {
  points: number;
  rating: number;
}

export interface GetUser {
  type: typeof Types.GETUSER;
  email: string;
  password: string;
}

export interface AddUser {
  type: typeof Types.ADDUSER;
  userName: string;
  email: string;
  password: string;
  fivePlaces: ModalState[];
}

interface RemoveUser {
  type: typeof Types.REMOVEUSER;
}

interface GetUserRatingSaga {
  type: typeof Types.USERRATING;
}

export type ActionTypes = GetUser | AddUser | RemoveUser | GetUserRatingSaga;
