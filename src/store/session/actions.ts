import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

// Action Definition
export interface SetAction {
  type: 'SET';
  accessToken: string;
}

export interface SetFetcing {
  type: 'SET_FETCHING';
  isFetching: boolean;
}

// union Action Types
export type Action = SetAction | SetFetcing;

// action Creators
export const set = (accessToken: string): SetAction => {
  return {type: 'SET', accessToken};
};

export const isFetching = (isFetching: boolean): SetFetcing => {
  return {type: 'SET_FETCHING', isFetching};
};

export const login = (
  username: string,
  password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true));
      console.log('Login in progress');

      setTimeout(() => {
        dispatch(set('this_is_access_token'));

        setTimeout(() => {
          dispatch(isFetching(false));
          console.log('Login done');
          resolve();
        }, 1000);
      }, 3000);
    });
  };
};
