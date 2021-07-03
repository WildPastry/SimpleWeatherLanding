import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import imageAction from './store/imageAction';
import { Container } from 'react-bootstrap';
import AppLoading from './components/AppLoading';
import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';
import Error from './components/Error';
import Scroll from './sections/Scroll';
import googleBadge from './assets/img/google-play-badge.png';
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

				<div className='bgimg-1'>
					<img src={googleBadge} className='googleBadge' alt='Google Play Store' />
				</div>

				<Container fluid className='my-3'>
					<Main />
				</Container>

				<div className='bgimg-2'>
					<Container fluid className='my-3'>
						...
					</Container>
				</div>

				<div className='positionRelative'>
					<Container fluid className='my-3'>
						<Scroll />
					</Container>
				</div>

				<div className='bgimg-3'>
					<div className='positionRelative'>
						<Container fluid className='my-3'>
							...
						</Container>
					</div>
				</div>

				<div className='positionRelative'>
					<Container fluid className='my-3'>
						...
					</Container>
				</div>

				<div className='bgimg-1'>
					<Container fluid className='my-3'>
						<Footer />
					</Container>
				</div>
			</>
		);
	};
	return pageData.loading ? showLoader() : renderPage(pageData);
};

App.displayName = 'App';
export default App;
