// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import session, {State as SessionState} from './session/reducers';
// import thunk from 'redux-thunk';

// export interface RootState {
//   session: SessionState;
// }

// export default createStore(
//   combineReducers<RootState>({
//     session,
//   }),
//   applyMiddleware(thunk)
// );

import { createStore } from 'redux';

const initialState = {
	isLoadingComplete: false
	// posts: [],
	// signUpModal: {
	//   open: false
	// }
};

const reducer = (state = initialState, action: any) => {
	if (action.type === 'LOAD_ASSETS') {
		return Object.assign({}, state, {
			isLoadingComplete: action.payload
		});
	}
	return state;
};

const store = createStore(reducer);

export default store;