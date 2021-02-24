/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IState {}
export interface IAction {
  type: string;
  payload?: any;
}

export interface UserState {
  token: string;
  userID?: number;
}

export interface RootState {
  user: UserState;
}
