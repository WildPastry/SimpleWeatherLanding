import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import AppLoading from './components/AppLoading';
import ArrowIcon from './components/ArrowIcon';
import Error from './components/Error';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Header from './sections/Header';
import IconSlider from './components/IconSlider';
import Intro from './sections/Intro';
import Locations from './sections/Locations';
import Privacy from './sections/Privacy';
import { RootState } from './store';
import Terms from './sections/Terms';
import Weather from './sections/Weather';
import imageAction from './store/imageAction';

// App
const App: React.FC = () => {
  // Reference the body
  const body = document.getElementsByTagName('body')[0];

  // Scroll function reference setup
  const currentSection = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Scroll to sections
  const scrollToRef = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToSection = (num: number) => scrollToRef(currentSection[num]);

  // Redux selector
  const pageData = useSelector((state: RootState) => {
    return state.imageData;
  });

  // Redux dispatch
  const dispatch = useDispatch();

  // Redux effect
  useEffect(() => {
    imageAction.loadImages(dispatch);
  }, [dispatch]);

  // ShowLoader
  const showLoader = () => {
    return <AppLoading />;
  };

  // ErrorContainer
  const errorContainer = () => {
    return <Error />;
  };

  // Remove scrolling from the body
  const toggleBody = (type: any) => {
    type === false
      ? body.classList.remove('overFlow')
      : body.classList.add('overFlow');
  };

  // Toggle privacy section
  const [showPrivacy, setShowPrivacy] = useState(false);
  const togglePrivacy = () => (showPrivacy === false
    ? (setShowPrivacy(true), toggleBody(true))
    : (setShowPrivacy(false), toggleBody(false)));

  // Toggle terms section
  const [showTerms, setShowTerms] = useState(false);
  const toggleTerms = () => (showTerms === false
    ? (setShowTerms(true), toggleBody(true))
    : (setShowTerms(false), toggleBody(false)));

  // RenderPage
  const renderPage = (pageData: any) => {

    /*
     * Show error container if there is one
     * otherwise display the app
     */
    return pageData.error ? (
      errorContainer()
    ) : (
      <>
        {showPrivacy ? <Privacy togglePrivacy={togglePrivacy} /> : null}
        {showTerms ? <Terms toggleTerms={toggleTerms} /> : null}
        <section ref={currentSection[0]} />
        <Header scrollToSection={scrollToSection} />
        <Intro />
        <div
          className='bgimg-1'
          style={{ backgroundImage: `url(${pageData.imageList[0]})` }}
        />
        <section ref={currentSection[1]} />
        <Features />
        <IconSlider />
        <section ref={currentSection[2]} />
        <Locations />
        <div
          className='bgimg-1'
          style={{ backgroundImage: `url(${pageData.imageList[1]})` }}
        />
        <section ref={currentSection[3]} />
        <Weather />
        <div
          className='bgimg-1'
          style={{ backgroundImage: `url(${pageData.imageList[2]})` }}
        />
        <section ref={currentSection[4]} />
        <Footer
          togglePrivacy={togglePrivacy}
          toggleTerms={toggleTerms}
          scrollToSection={scrollToSection}
        />
        <ArrowIcon scrollToSection={scrollToSection} />
      </>
    );
  };
  // Wait for page to load before displaying
  return pageData.loading ? showLoader() : renderPage(pageData);
};

// EXPORT App
App.displayName = 'App';
export default App;
