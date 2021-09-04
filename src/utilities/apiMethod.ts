// import assets
import bgImgOne from '../assets/img/bgimg-1.jpg';
import bgImgTwo from '../assets/img/bgimg-2.jpg';
import bgImgThree from '../assets/img/bgimg-3.jpg';
import screenOne from '../assets/img/screen-1.png';
import screenTwo from '../assets/img/screen-2.png';

const apiMethod = {
	async getMethod() {
		const response = [
			bgImgOne,
			bgImgTwo,
			bgImgThree,
			screenOne,
			screenTwo
		];
		return response;
	}
};

export default apiMethod;