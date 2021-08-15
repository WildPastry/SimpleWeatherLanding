// import assets
import bgImgOne from '../assets/img/bgimg-1.jpg';
import bgImgTwo from '../assets/img/bgimg-2.jpg';
import bgImgThree from '../assets/img/bgimg-3.jpg';

const apiMethod = {
	async getMethod() {
		const response = [
			bgImgOne,
			bgImgTwo,
			bgImgThree
		];
		return response;
	}
};

export default apiMethod;