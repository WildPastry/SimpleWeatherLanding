// import frameworks
import { useState } from 'react';

// import icon
import { ArrowUpOutline } from 'react-ionicons';

// scroll function from APP
interface ScrollProps {
	scrollToPane(num: number): any;
}

// TOPICON
const TopIcon: React.FC<ScrollProps> = (props) => {
	// scroll icon display logic
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

	window.addEventListener('scroll', checkScrollTop)
	return (
		<ArrowUpOutline
		  style={{display: showScroll ? 'block' : 'none'}}
			onClick={() => props.scrollToPane(0)}
			cssClasses='topIcon'
			color={'#1faadb'}
			title={'TOP'}
			height='65px'
			width='65px'
		/>
	);
};

// EXPORT TOPICON
TopIcon.displayName = 'TopIcon';
export default TopIcon;
