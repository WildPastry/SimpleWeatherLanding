import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import imageAction from './store/imageAction';
import { Container } from 'react-bootstrap';
import AppLoading from './components/AppLoading';
import Header from './sections/Header';
import Intro from './sections/Intro';
import Footer from './sections/Footer';
import Error from './components/Error';
import IconSlider from './sections/IconSlider';
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

				<div className='bgimg-1'>
					<Container fluid='md' className='my-3'>
						IMG 1 (INCLUDE TEXT)
					</Container>
				</div>

				<IconSlider />

				<div className='bgimg-2'>
					<Container fluid='md' className='my-3'>
						IMG 2 (PROBABLY NO TEXT)
					</Container>
				</div>

				<Footer />
			</>
		);
	};
	return pageData.loading ? showLoader() : renderPage(pageData);
};

App.displayName = 'App';
export default App;
