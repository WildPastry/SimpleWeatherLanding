import { ArrowUpOutline } from 'react-ionicons';
import { useState } from 'react';

/** @type {ScrollToSection} */
/** @param {ScrollToSection} params.scrollToSection */

// ArrowIcon
const ArrowIcon: React.FC<ScrollToSection> = (
  props: ScrollToSection
): JSX.Element => {
  // Icon display logic
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener('scroll', checkScrollTop);
  return (
    <ArrowUpOutline
      style={{ display: showScroll ? 'block' : 'none' }}
      onClick={() => props.scrollToSection(0)}
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
