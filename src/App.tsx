// import frameworks
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import imageAction from './store/imageAction';

// import sections
import Header from './sections/Header';
import Intro from './sections/Intro';
import Features from './sections/Features';
import IconSlider from './sections/IconSlider';
import Locations from './sections/Locations';
import Weather from './sections/Weather';
import About from './sections/About';
import Footer from './sections/Footer';

// import components
import AppLoading from './components/AppLoading';
import Error from './components/Error';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

// APP
const App: React.FC = () => {
	// scroll functions
	let currentSection = [useRef(null), useRef(null), useRef(null), useRef(null)];

	const scrollToRef = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth' });
	const scrollToPane = (num: number) => scrollToRef(currentSection[num]);

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
				<Header scrollToPane={scrollToPane} />
				<Intro />
				<div className='bgimg-1' />
				<div ref={currentSection[0]} />
				<Features />
				<IconSlider />
				<div className='bgimg-2' />
				<div ref={currentSection[1]} />
				<Locations />
				<div className='bgimg-3' />
				<div ref={currentSection[2]} />
				<Weather />
				<div ref={currentSection[3]} />
				<About />
				<div className='bgimg-1' />
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
