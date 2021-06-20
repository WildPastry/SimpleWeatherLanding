import {Container} from 'react-bootstrap';
import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';

import { useAppDispatch } from './redux/hooks';
import {useSelector} from 'react-redux';
import {LoadingState} from './redux/reducers/loadReducer';
import {loadAction} from './redux/actions/loadAction';
// import { NewNoteInput } from "./sections/NewNoteInput";
// import { useSelector } from "react-redux";
// import { NotesState } from "./redux/reducers/notesReducer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

import { createStore, combineReducers } from 'redux';

const App = () => {
  
// const dispatch = useAppDispatch();

// helpers

function getActionName(actionType: string) {
  if (typeof actionType !== 'string') {
    return null;
  }

  return actionType
    .split('_')
    .slice(0, -1)
    .join('_');
}

function createLoadingActionType(suffix: string) {
  return (actionName: any) => {
    return `${actionName}_${suffix}`;
  };
}

const createRequestActionType = createLoadingActionType('REQUEST');
const createSuccessActionType = createLoadingActionType('SUCCESS');
const createFailureActionType = createLoadingActionType('FAILURE');

// types

const GET_USERS_TYPE = 'GET_USERS';

const GET_USERS_REQUEST = createRequestActionType(GET_USERS_TYPE);
const GET_USERS_SUCCESS = createSuccessActionType(GET_USERS_TYPE);
const GET_USERS_FAILURE = createFailureActionType(GET_USERS_TYPE);

// reducers

const pendingReducer = (state = {}, action: { type: any; }) => {
  const { type } = action;
  const actionName = getActionName(type);

  if (!actionName) {
    return {
      ...state
    };
  }

  if (type.endsWith('_REQUEST')) {
    return {
      ...state,
      [actionName]: {
        pending: true
      }
    };
  }

  if (type.endsWith('_SUCCESS') || type.endsWith('_FAILURE')) {
    return {
      ...state,
      [actionName]: {
        pending: false
      }
    };
  }

  return {
    ...state
  };
};

const initialUserState = {
  user: null
};

const userReducer = (state = initialUserState, action: { type: string; payload: { user: any; }; }) => {
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      user: action.payload.user
    };
  }

  if (action.type === GET_USERS_FAILURE) {
    return {
      ...state,
      user: null
    };
  }

  return { ...state };
};

const store = createStore(
  combineReducers({
    pendingStates: pendingReducer,
    user: userReducer
  })
);

store.dispatch({
  type: GET_USERS_REQUEST,
  payload: {}
});

console.log(store.getState());

setTimeout(() => {
  store.dispatch({
    type: GET_USERS_SUCCESS,
    payload: {
      user: {
        id: '666',
        email: 'MIKE'
      }
    }
  });

  console.log(store.getState());
}, 2000);

// export const fetchAssets = () => {
//   return dispatch => {
//     request
//       .get('http://myapi.com/assets')
//       .set('Accept', 'application/json')
//       .end(function(err, res){
//         if (err) {
//           return dispatch(fetchAssetsFailure(err));
//         }
//         dispatch(fetchAssetsSuccess(res.body.data));
//       });
//   }
// }

  // const isLoading = useSelector<LoadingState, LoadingState['isLoading']>((state) => state.isLoading);

  // const isLoading = useSelector<LoadingState, LoadingState['notes']>((state) => state.notes);

  // const dispatch = useAppDispatch();

  // const onAddNote = (note: string) => {
  //   dispatch(loadAction(note));
  // };

  // console.log(dispatch(loadAction(false)))
  // const onAddNote = (note: string) => {
  //   dispatch(addNote(note));
  // };

  // const notes = useSelector<NotesState, NotesState["notes"]>(
  //   (state) => state.notes
  // );

  return (
    <Container fluid className='my-3'>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

App.displayName = 'App';

export default App;
