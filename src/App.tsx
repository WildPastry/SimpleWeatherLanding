// import frameworks
import { useRef, useEffect } from 'react';
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
	// scroll functions
	const myRef = useRef<any | null>(null);
	const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

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
				{/* <button onClick={executeScroll}>SCROLL</button> */}
				<Header executeScroll={executeScroll} />
				<Intro />
				<div className='bgimg-1' />
				<Features />
				<IconSlider />
				<div className='bgimg-2' />
				<Locations />
				<div className='bgimg-3' />
				<Weather />
				<div className='bgimg-1' />
				<div ref={myRef}>...</div>
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
