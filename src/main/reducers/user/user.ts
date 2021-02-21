import { IState, IAction } from '../types';

const defaultState: IState = {
  token: '',
};

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
