import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SlideShow = () => {
	const pageData = useSelector((state: RootState) => {
		return state.imageData;
	});

	let currentImages = [];

	for (let i = 0; i < 9; i++) {
		currentImages.push(pageData.imageList[i]);
	}

	const IMAGE_URL = currentImages;

	return (
		<div className='wrapper'>
			<Splide
				options={{
					type: 'loop',
					gap: '1rem',
					autoplay: false,
					pauseOnHover: false,
					resetProgress: false,
					arrows: 'slider'
				}}
				hasSliderWrapper
				hasAutoplayControls
				hasAutoplayProgress>
				{IMAGE_URL.map((slide: any) => (
					<SplideSlide key={slide.id}>
						<img src={slide.url} alt={slide.title} />
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};

SlideShow.displayName = 'SlideShow';
export default SlideShow;
