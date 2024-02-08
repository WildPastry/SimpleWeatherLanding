import brokenClouds from '../assets/animations/weather/brokenClouds.json';
import dayClear from '../assets/animations/weather/dayClear.json';
import lightDrizzle from '../assets/animations/weather/lightDrizzle.json';
import nightClear from '../assets/animations/weather/nightClear.json';
import snow from '../assets/animations/weather/snow.json';
import thunderStorm from '../assets/animations/weather/thunderStorm.json';
import { useLottie } from 'lottie-react';

// WeatherIcon
const WeatherIcon: React.FC = () => {
  const weatherIcons = [
    dayClear,
    brokenClouds,
    nightClear,
    thunderStorm,
    lightDrizzle,
    snow
  ];

  // Select a random weather icon
  const randomWeather = Math.floor(Math.random() * weatherIcons.length);
  const currentIcon = weatherIcons[randomWeather];

  // Icon styles
  const style = {
    height: 300
  };

  // Icon options
  const options = {
    animationData: currentIcon,
    loop: true,
    autoplay: true
  };

  // Diplay the weather animation
  const { View } = useLottie(options, style);
  return View;
};

// EXPORT WeatherIcon
WeatherIcon.displayName = 'WeatherIcon';
export default WeatherIcon;
