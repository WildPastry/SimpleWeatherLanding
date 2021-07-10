import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import imageAction from './store/imageAction';

// import sections
import Header from './sections/Header';
import Intro from './sections/Intro';
import Data from './sections/Data';
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

const App = () => {
	const dispatch = useDispatch();

	const pageData = useSelector((state: RootState) => {
		return state.imageData;
	});

	useEffect(() => {
		imageAction.loadImages(dispatch);
	}, [dispatch]);

	const errorContainer = () => {
		return <Error />;
	};

	const showLoader = () => {
		return <AppLoading />;
	};

	const renderPage = (pageData: any) => {
		console.log(pageData);

		return pageData.error ? (
			errorContainer()
		) : (
			<>
				<Header />

				<Intro />

				<div className='bgimg-1' />

				<Features />

				<IconSlider />

				<div className='bgimg-2' />

				<Locations />

				<Weather />

				<div className='bgimg-3' />

				<Data />
				
				<div className='bgimg-1' />

				<Footer />
			</>
		);
	};
	return pageData.loading ? showLoader() : renderPage(pageData);
};

App.displayName = 'App';
export default App;
