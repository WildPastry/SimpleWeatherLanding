// import utilities
import Communication from '../utilities/apiMethod';

const imageAction = {
	loadImages(dispatch: any) {
		dispatch({
			type: 'LOAD_IMAGES',
			payload: null
		});
		Communication.getMethod()
			.then((images) => {
				dispatch({
					type: 'GET_IMAGES',
					payload: images
				});
			})
			.catch(() => {
				dispatch({
					type: 'ERROR_IMAGES',
					payload: null
				});
			})
			.finally(() => {});
	}
};

export default imageAction;