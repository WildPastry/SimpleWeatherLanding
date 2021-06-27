import Communication from '../utilities/apiMethod';
import config from '../utilities/config';

const imageAction = {
	loadImages(dispatch: any) {
		dispatch({
			type: 'LOAD_IMAGES',
			payload: null
		});
		Communication.getMethod(config.endPoints.images)
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
