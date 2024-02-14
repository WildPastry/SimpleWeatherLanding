// Enums
declare enum WetherType {
  'daily',
  'weekly',
  'current'
}

// Interfaces
interface AppState {
  imageList: string[];
  loading: boolean;
  error: boolean;
}

interface WeatherData {
  id: number;
  label: string;
  openData: WetherType;
  darkSkyData: WetherType;
  icon: string;
  type: 'day' | 'night';
  desc: string;
}

interface ScrollToSection {
  scrollToSection(num: number): any;
}

interface SectionProps {
  scrollToSection(num: number): any;
}

// Modules
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
