// import icon
import { Location } from 'react-ionicons';

// LocationIcon
const LocationIcon: React.FC = () => {
	return (
		<>
			<Location color={'#37d493'} title={'Location Pin'} height='300px' width='300px' />
		</>
	);
};

// EXPORT LocationIcon
LocationIcon.displayName = 'LocationIcon';
export default LocationIcon;
