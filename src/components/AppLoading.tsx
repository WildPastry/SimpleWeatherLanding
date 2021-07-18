// AppLoading
const AppLoading = () => {
	return (
		<>
			<div className='loader'>
				<div className='loader-inner'>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
					<div className='loader-line-wrap'>
						<div className='loader-line'></div>
					</div>
				</div>
			</div>
		</>
	);
};

// EXPORT AppLoading
AppLoading.displayName = 'AppLoading';
export default AppLoading;
