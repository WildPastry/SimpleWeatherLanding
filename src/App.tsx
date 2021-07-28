// import frameworks
import { useRef, useEffect } from 'react';
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
import { render } from '@testing-library/react';

// App
const App: React.FC = () => {
	// scroll function useRef setup
	let currentSection = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null)
	];

	// scroll to sections
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

	// renderDisplay
	// const renderDisplay = () => {
	// 	let renderThis;
	// 	const night = this.props.night;
	// 	if (night) {
	// 		sunDisplay = (
	// 			<View style={currentStyles.currentDetailsWrap}>
	// 				<Text
	// 					style={{
	// 						fontFamily: 'weatherfont',
	// 						fontSize: 18,
	// 						color: colours.spotYellow
	// 					}}>
	// 					{weatherIcons.sunrise.code}
	// 				</Text>
	// 				<Text style={currentStyles.currentDetails}>
	// 					{'  '}Sunrise at {sunrise}
	// 				</Text>
	// 			</View>
	// 		);
	// 	} else {
	// 		sunDisplay = (
	// 			<View style={currentStyles.currentDetailsWrap}>
	// 				<Text
	// 					style={{
	// 						fontFamily: 'weatherfont',
	// 						fontSize: 18,
	// 						color: colours.spotYellow
	// 					}}>
	// 					{weatherIcons.sunset.code}
	// 				</Text>
	// 				<Text style={currentStyles.currentDetails}>
	// 					{'  '}Sunset at {sunset}
	// 				</Text>
	// 			</View>
	// 		);
	// 	}
	// 	return sunDisplay;
	// }

	// const Search = () => {
	// 	const [showResults, setShowResults] = React.useState(false)
	// 	const onClick = () => setShowResults(true)
	// 	return (
	// 		<div>
	// 			<input type="submit" value="Search" onClick={onClick} />
	// 			{ showResults ? <Results /> : null }
	// 		</div>
	// 	)
	// }

	// const Results = () => (
	// 	<div id="results" className="search-results">
	// 		Some Results
	// 	</div>
	// )

	// showPrivacy function
	const showPrivacy = () => {
		console.log('inside showPrivacy');
		return <Privacy />;
	};

	// showTerms function
	const showTerms = () => {
		console.log('inside showTerms');
		return <Terms />;
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
				<div ref={currentSection[0]} />
				<Header scrollToPane={scrollToPane} />
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
					showPrivacy={showPrivacy}
					showTerms={showTerms}
					scrollToPane={scrollToPane}
				/>
				<ArrowIcon scrollToPane={scrollToPane} />
			</>
		);
	};
	// wait for page to load before displaying
	return pageData.loading ? showLoader() : renderPage(pageData);
};

// EXPORT App
App.displayName = 'App';
export default App;
