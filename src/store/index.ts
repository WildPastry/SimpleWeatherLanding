import {combineReducers} from 'redux';
import imageReducer from './imageReducer';

const rootReducers = combineReducers({
  imageData: imageReducer
});

export type RootState = ReturnType<typeof rootReducers>

export default rootReducers;
