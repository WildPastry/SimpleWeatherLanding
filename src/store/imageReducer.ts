const initialState: AppState = {
  imageList: [],
  error: false,
  loading: true
};

const imageReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
  case 'LOAD_IMAGES':
    return { ...state, imageList: [], error: false, loading: true };
  case 'GET_IMAGES':
    return { ...state, imageList: action.payload, error: false, loading: false };
  case 'ERROR_IMAGES':
    return { ...state, imageList: [], error: true, loading: false };
  case 'SUCCESS_IMAGES':
    return { ...state, imageList: action.payload, error: false, loading: false };
  default:
    return state;
  }
};

export default imageReducer;
