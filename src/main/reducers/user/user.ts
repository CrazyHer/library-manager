import { LOGOFF } from '../../components/layout_redux';
import { UPDATE_USER } from '../../pages/login/login_redux';
import { IAction, UserState } from '../types';

const defaultState: UserState = {
  token: '',
};

export default function user(
  state: UserState = defaultState,
  action: IAction
): UserState {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        token: action.payload.token,
        userID: action.payload.userID,
      };
    case LOGOFF:
      return defaultState;
    default:
      return state;
  }
}
