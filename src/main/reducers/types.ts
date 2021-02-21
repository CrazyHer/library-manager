/* eslint-disable @typescript-eslint/no-explicit-any */
export type IState = Record<string, any>;
export interface IAction {
  type: string;
  payload?: any;
}
