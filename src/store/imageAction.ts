import { AnyAction } from '@reduxjs/toolkit';
import Communication from '../utilities/apiMethod';
import { Dispatch } from 'react';

const imageAction = {
  loadImages(dispatch: Dispatch<AnyAction>) {
    dispatch({
      type: 'LOAD_IMAGES',
      payload: null
    });
    Communication.getMethod()
      .then((images: string[]) => {
        setTimeout(() => {
          dispatch({
            type: 'GET_IMAGES',
            payload: images
          });
        }, 1000);
      })
      .catch(() => {
        dispatch({
          type: 'ERROR_IMAGES',
          payload: null
        });
      });
  }
};

export default imageAction;
