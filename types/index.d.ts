// declarations
declare enum WetherType {
	'daily',
	'weekly',
	'current'
}

// interfaces
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

interface TogglePrivacy {
	togglePrivacy(): any;
}

interface ToggleTerms {
	toggleTerms(): any;
}

interface SectionProps {
	scrollToSection(num: number): any;
	togglePrivacy(): any;
	toggleTerms(): any;
}

// modules
declare module '*.svg' {
	const content: string;
	export default content;
}