// import icon
import { Close } from 'react-ionicons';

/** @type {ToggleTerms} */
/** @param {ToggleTerms} params.toggleTerms */

// CloseIcon
const CloseIcon: React.FC<ToggleTerms> = (props) => {
	return (
		<Close
			onClick={() => props.toggleTerms()}
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
