import { combineReducers } from 'redux';
import { rapperReducers } from '../rapper';
import { IState, IAction } from './types';
import user from './user/user';

const rootReducer = { ...rapperReducers, user };

export default combineReducers<IState, IAction>(rootReducer);
