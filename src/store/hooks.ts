import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
