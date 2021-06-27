import axios from 'axios';
import config from './config';

const apiMethod = {
	getMethod(endpoint: any) {
		return axios.get(config.baseUrl + endpoint).then((response) => {
			return response.data;
		});
	}
};

export default apiMethod;

// setTimeout(() => {
// 	setLoadingComplete(true);
// }, 4000);