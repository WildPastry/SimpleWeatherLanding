import axios from 'axios';
import config from './config';

const apiMethod = {
	async getMethod(endpoint: any) {
		const response = await axios.get(config.baseUrl + endpoint);
		return response.data;
	}
};

export default apiMethod;