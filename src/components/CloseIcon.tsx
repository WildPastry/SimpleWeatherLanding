// import icon
import { Close } from 'react-ionicons';

// CloseIcon
const CloseIcon: React.FC = () => {
	return (
		<Close
			cssClasses='closeIcon'
			color={'#1faadb'}
			title={'CLOSE'}
			height='50px'
			width='50px'
		/>
	);
};

// EXPORT CloseIcon
CloseIcon.displayName = 'CloseIcon';
export default CloseIcon;
