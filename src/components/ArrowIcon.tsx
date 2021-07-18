// import frameworks
import { useState } from 'react';

// import icon
import { ArrowUpOutline } from 'react-ionicons';

// scroll function from APP
interface ScrollProps {
	scrollToPane(num: number): any;
}

// ArrowIcon
const ArrowIcon: React.FC<ScrollProps> = (props) => {
	// icon display logic
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
			cssClasses='arrowIcon'
			color={'#1faadb'}
			title={'TOP'}
			height='50px'
			width='50px'
		/>
	);
};

// EXPORT ArrowIcon
ArrowIcon.displayName = 'ArrowIcon';
export default ArrowIcon;
