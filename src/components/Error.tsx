import { Link } from 'react-router-dom';

// Error
const Error: React.FC = (): JSX.Element => {
  return (
    <div className='fullPageFixed bg-dark'>
      <div className='fullPageFixedInner'>
        <h1 className='light text-center display-1'>404</h1>
        <h5 className='light text-center mb-4'>
          Sorry, an unexpected error has occurred.
        </h5>
        <Link to={`/`} className='text-center'>
          <p>Take me back to the home page</p>
        </Link>
      </div>
    </div>
  );
};

// EXPORT Error
Error.displayName = 'Error';
export default Error;
