/** @type {TogglePrivacy} */
/** @param {TogglePrivacy} params.togglePrivacy */

// Privacy
const Privacy: React.FC<TogglePrivacy> = (props) => {
	return (
		<>
			<div className='fullPageFixed bg-dark' onClick={() => props.togglePrivacy()}>
				<div className='fullPageFixedInner'>
					<h1 className='spotOrange text-center'>PRIVACY</h1>
					<h5 className='light text-center'>Information here</h5>
				</div>
			</div>
		</>
	);
};

// EXPORT Privacy
Privacy.displayName = 'Privacy';
export default Privacy;
