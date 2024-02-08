import { Dispatch, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLoading from '../components/AppLoading';
import ArrowIcon from '../components/ArrowIcon';
import Error from '../components/Error';
import Features from '../sections/Features';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import IconSlider from '../components/IconSlider';
import Intro from '../sections/Intro';
import Locations from '../sections/Locations';
import { RootState } from '../store';
import { UnknownAction } from '@reduxjs/toolkit';
import Weather from '../sections/Weather';
import imageAction from '../store/imageAction';

// Layout
const Layout: React.FC = (): JSX.Element => {
  // Scroll function reference setup
  const currentSection: React.MutableRefObject<null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Scroll to sections
  const scrollToRef: (ref: any) => any = (ref: any) =>
    ref.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToSection: (num: number) => any = (num: number) =>
    scrollToRef(currentSection[num]);

  // Redux selector
  const pageData: {
    imageList: any;
    error: boolean;
    loading: boolean;
  } = useSelector((state: RootState) => {
    return state.imageData;
  });

  // Redux dispatch
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  // Redux effect
  useEffect(() => {
    imageAction.loadImages(dispatch);
  }, [dispatch]);

  // ShowLoader
  const showLoader: () => JSX.Element = () => {
    return <AppLoading />;
  };

  // ErrorContainer
  const errorContainer: () => JSX.Element = () => {
    return <Error />;
  };

  // RenderPage
  const renderPage: (pageData: any) => JSX.Element = (pageData: any) => {
    /*
     * Show error container if there is one
     * otherwise display the app
     */
    return pageData.error ? (
      errorContainer()
    ) : (
      <>
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
        <Footer scrollToSection={scrollToSection} />
        <ArrowIcon scrollToSection={scrollToSection} />
      </>
    );
  };
  // Wait for page to load before displaying
  return pageData.loading ? showLoader() : renderPage(pageData);
};

// EXPORT Layout
Layout.displayName = 'Layout';
export default Layout;
