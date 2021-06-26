import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default () => {
	const IMAGE_URL = 'https://source.unsplash.com/random/800x450';

	function createSlides(length = 10, sig = 0) {
		return Array.apply(null, Array(length)).map((_value, index) => {
			index = sig || index;

			return {
				src: `${IMAGE_URL}?sig=${index}`,
				alt: `Image ${index}`
			};
		});
	}

	return (
		<div className='wrapper'>
			<Splide
				options={{
					type: 'loop',
					gap: '1rem',
					autoplay: true,
					pauseOnHover: false,
					resetProgress: false,
					arrows: 'slider'
				}}
				hasSliderWrapper
				hasAutoplayControls
				hasAutoplayProgress>
				{createSlides().map((slide) => (
					<SplideSlide key={slide.src}>
						<img src={slide.src} alt={slide.alt} />
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};
