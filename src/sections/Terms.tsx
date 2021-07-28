/** @type {ToggleTerms} */
/** @param {ToggleTerms} params.toggleTerms */

// Terms
const Terms: React.FC<ToggleTerms> = (props) => {
	return (
		<>
			<div className='fullPageFixed' onClick={() => props.toggleTerms()}>
				<div className='fullPageFixedInner'>
					<h1 className='spotOrange text-center'>TERMS</h1>
					<h5 className='light text-center'>Information here</h5>
				</div>
			</div>
		</>
	);
};

// EXPORT Terms
Terms.displayName = 'Terms';
export default Terms;
