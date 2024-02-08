import loader from '../assets/animations/loader.json';
import { useLottie } from 'lottie-react';

// AppLoading
const AppLoading = () => {
  // Icon styles
  const style = {
    height: 200
  };

  // Icon options
  const options = {
    animationData: loader,
    loop: true,
    autoplay: true
  };

  // Diplay the loading animation
  const { View } = useLottie(options, style);
  return <section className='loader'>{View}</section>;
};

// EXPORT AppLoading
AppLoading.displayName = 'AppLoading';
export default AppLoading;
