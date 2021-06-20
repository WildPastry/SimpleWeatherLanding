import {createStore} from 'redux';
import {notesReducer} from './reducers/notesReducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore(notesReducer);
