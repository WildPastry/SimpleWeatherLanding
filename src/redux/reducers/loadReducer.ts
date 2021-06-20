export interface LoadingState {
  isLoading: boolean;
}

const initialState = {
  isLoading: false
};

export type Action = {type: 'LOAD_ASSETS'; payload: boolean};

export const loadReducer = (state: LoadingState = initialState) => {
  //   if (state !== undefined) {
  //     return state;
  // }
  // switch (action.type) {
  //   case 'LOAD_ASSETS': {
  //     return {...state};
  //   }
  //   default:
  //     return state;
  // }
  return state;
};

// const isLoadingMiddleware = ({ dispatch }) => next => {
//   next(action);
//   const isLoading = action.meta && action.meta.isLoading;

//   if (isLoading !== undefined) {
//       dispatch(isLoading ? showLoading () : hideLoading());
//   }
// }

// const loadReducer = (state = {}, action: { type: any; }) => {
// import loadReducer from './loadReducer';
//   const { type } = action;
//   const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
  
//   // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
//   if (!matches) return state;  
  
//   const [, requestName, requestState] = matches;
//   return {
//     ...state,
//     // Store whether a request is happening at the moment or not
//     // e.g. will be true when receiving GET_TODOS_REQUEST
//     //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
//     [requestName]: requestState === 'REQUEST',
//   };
// };

// export default loadReducer;

// export const loadReducer = (state = false, { meta }) => {
//   const isLoading = meta && meta.isLoading;

//   if (isLoading !== undefined) {
//       return isLoading;
//   }

//   return state;
// }