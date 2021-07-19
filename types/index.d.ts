// declarations
declare module '@splidejs/react-splide';

declare enum WetherType {
  'daily', 'weekly', 'current'
}

// interface
interface WeatherData {
  id: number;
  label: string;
  openData: WetherType;
  darkSkyData: WetherType;
  icon: string;
  type: 'day'|'night';
  desc: string;
}