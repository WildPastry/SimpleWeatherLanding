// import assets
import LocationIconOne from '../assets/img/location-icon.png';

// LocationIcon
const LocationIcon: React.FC = () => {

	return (
		<>
			<img className='locationIcon' src={LocationIconOne} alt='Location Icon' />
		</>
	);
};

// EXPORT LocationIcon
LocationIcon.displayName = 'LocationIcon';
export default LocationIcon;
