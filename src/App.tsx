import { Container } from 'react-bootstrap';
import AppLoading from './components/AppLoading';
// import Parallax from './components/Parallax';
import Header from './sections/Header';
import Main from './sections/Main';
import Login from './sections/Login';
import Footer from './sections/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

const App = () => {
	return (
		<>
			<AppLoading />

			<div className='bgimg-1'>
				<Container fluid className='my-3'>
					<Header />
				</Container>
			</div>
			
			<Container fluid className='my-3'>
				<Main />
			</Container>

			<div className='bgimg-2'>
				<Container fluid className='my-3'>
					<Login />
				</Container>
			</div>

			<div className='positionRelative'>
				<Container fluid className='my-3'>
					SPACE 1 FOR TEXT
				</Container>
			</div>

			<div className='bgimg-3'>
				<div className='positionRelative'>
					<Container fluid className='my-3'>
						SPACE 1 FOR COMPONENT
					</Container>
				</div>
			</div>

			<div className='positionRelative'>
				<Container fluid className='my-3'>
					SPACE 2 FOR TEXT
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

App.displayName = 'App';

export default App;
