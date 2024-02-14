import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routesConfig from './routes/Routes';

// App
const App: React.FC = (): JSX.Element => {
  const router = createBrowserRouter(routesConfig);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

// EXPORT App
App.displayName = 'App';
export default App;
