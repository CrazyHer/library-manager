import { IAction } from '../../reducers/types';

export const UPDATE_USER = 'UPDATE_USER';
export const updateUserAction = (token: string, userID: number): IAction => {
  return {
    type: UPDATE_USER,
    payload: { token, userID },
  };
};
