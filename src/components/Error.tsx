const Error = () => {
	return (
		<>
			<div className='fullPageFixed'>
				<div className='fullPageFixedInner'>
					<h2 className='h2Bd textRed text-center'>ERROR LOADING DATA</h2>
					<p className='textLight text-center'>Please try again later</p>
				</div>
			</div>
		</>
	);
};

Error.displayName = 'Error';
export default Error;
