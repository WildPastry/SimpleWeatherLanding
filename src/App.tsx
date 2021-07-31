// import frameworks
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import imageAction from './store/imageAction';

// import sections
import Privacy from './sections/Privacy';
import Terms from './sections/Terms';
import Header from './sections/Header';
import Intro from './sections/Intro';
import Features from './sections/Features';
import Locations from './sections/Locations';
import Weather from './sections/Weather';
import About from './sections/About';
import Footer from './sections/Footer';

// import components
import AppLoading from './components/AppLoading';
import IconSlider from './components/IconSlider';
import Error from './components/Error';
import ArrowIcon from './components/ArrowIcon';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

// App
const App: React.FC = () => {
	// reference the body
	let body = document.getElementsByTagName('body')[0];

	// scroll function reference setup
	let currentSection = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null)
	];

	// scroll to sections
	const scrollToRef = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth' });
	const scrollToSection = (num: number) => scrollToRef(currentSection[num]);

	// redux selector
	const pageData = useSelector((state: RootState) => {
		return state.imageData;
	});

	// redux dispatch
	const dispatch = useDispatch();

	// redux effect
	useEffect(() => {
		imageAction.loadImages(dispatch);
	}, [dispatch]);

	// showLoader
	const showLoader = () => {
		return <AppLoading />;
	};

	// errorContainer
	const errorContainer = () => {
		return <Error />;
	};

	// remove scrolling from the body
	const toggleBody = (type: any) => {
		type === false ? body.classList.remove('overFlow') : body.classList.add('overFlow');
	};

	// toggle privacy section
	const [showPrivacy, setShowPrivacy] = useState(false);
	const togglePrivacy = () =>
		showPrivacy === false
			? (setShowPrivacy(true), toggleBody(true))
			: (setShowPrivacy(false), toggleBody(false));

	// toggle terms section
	const [showTerms, setShowTerms] = useState(false);
	const toggleTerms = () =>
		showTerms === false
			? (setShowTerms(true), toggleBody(true))
			: (setShowTerms(false), toggleBody(false));

	// renderPage
	const renderPage = (pageData: any) => {
		console.log(pageData);
		// show error container if there is one
		// otherwise display the app
		return pageData.error ? (
			errorContainer()
		) : (
			<>
				<div>{showPrivacy ? <Privacy togglePrivacy={togglePrivacy} /> : null}</div>
				<div>{showTerms ? <Terms toggleTerms={toggleTerms} /> : null}</div>
				<div ref={currentSection[0]} />
				<Header scrollToSection={scrollToSection} />
				<Intro />
				<div className='bgimg-1' />
				<div ref={currentSection[1]} />
				<Features />
				<IconSlider />
				<div ref={currentSection[2]} />
				<Locations />
				<div className='bgimg-2' />
				<div ref={currentSection[3]} />
				<Weather />
				<div ref={currentSection[4]} />
				<About />
				<div className='bgimg-3' />
				<Footer
					togglePrivacy={togglePrivacy}
					toggleTerms={toggleTerms}
					scrollToSection={scrollToSection}
				/>
				<ArrowIcon scrollToSection={scrollToSection} />
			</>
		);
	};
	// wait for page to load before displaying
	return pageData.loading ? showLoader() : renderPage(pageData);
};

// EXPORT App
App.displayName = 'App';
export default App;
