// scroll function from APP
interface ScrollProps {
	scrollToPane(num: number): any;
}

// TOPICON
const TopIcon: React.FC<ScrollProps> = (props) => {
	return <div className='topIcon' onClick={() => props.scrollToPane(0)}>TOP</div>;
};

// EXPORT TOPICON
TopIcon.displayName = 'TopIcon';
export default TopIcon;
