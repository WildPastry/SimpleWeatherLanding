// import frameworks
import { createRef, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import imageAction from './store/imageAction';

// import sections
import Header from './sections/Header';
import Intro from './sections/Intro';
import IconSlider from './sections/IconSlider';
import Locations from './sections/Locations';
import Weather from './sections/Weather';
import Features from './sections/Features';
import Footer from './sections/Footer';

// import components
import AppLoading from './components/AppLoading';
import Error from './components/Error';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

// APP
const App: React.FC = () => {
	let pageRef = [useRef(null), useRef(null)];

	const scrollToRef = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth' });
	const scrollToPane = (num: number) => scrollToRef(pageRef[num]);

	const sections = ['features', 'locations', 'weather', 'about'];
	const refArray = useRef([]) as any;

	const changeColor = (index: any) => {
		// refArray.current[index].classList.toggle('CLASS_NAME');
		console.log(refArray.current[index]);
	};

	// scroll functions
	const section = useRef<any | null>(null);
	const executeScroll = () => section.current.scrollIntoView({ behavior: 'smooth' });

	// redux selector functions
	const pageData = useSelector((state: RootState) => {
		return state.imageData;
	});

	// redux dispatch and effect functions
	const dispatch = useDispatch();

	useEffect(() => {
		imageAction.loadImages(dispatch);
	}, [dispatch]);

	// errorContainer function
	const errorContainer = () => {
		return <Error />;
	};

	// showLoader function
	const showLoader = () => {
		return <AppLoading />;
	};

	// renderPage
	const renderPage = (pageData: any) => {
		console.log(pageData);
		// show error container if there is one
		// otherwise display the app
		return pageData.error ? (
			errorContainer()
		) : (
			<>
				<Header executeScroll={executeScroll} />

				<div>
					<button onClick={() => scrollToPane(0)}>Section 1</button>
					<button onClick={() => scrollToPane(1)}>Section 2</button>
				</div>

				<div style={{ marginTop: '1500px', marginBottom: '1500px' }}>
					<div ref={pageRef[0]}>Section 1</div>
					<div ref={pageRef[1]}>Section 2</div>
				</div>

				<div>
					{sections.map((section, index) => (
						<p
							onClick={changeColor.bind(null, index)}
							ref={(ref) => {
								refArray.current[index] = ref;
							}}>
							{section}
						</p>
					))}
				</div>

				<Intro />
				<div className='bgimg-1' />
				<Features />
				<IconSlider />
				<div className='bgimg-2' />
				<Locations />
				<div className='bgimg-3' />
				<Weather />
				<div className='bgimg-1' />
				<div ref={section}>...</div>
				<Footer />
			</>
		);
	};
	// wait for page to load before displaying
	return pageData.loading ? showLoader() : renderPage(pageData);
};

// EXPORT APP
App.displayName = 'App';
export default App;
