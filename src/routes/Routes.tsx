import Error from '../components/Error';
import Layout from '../pages/Layout';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  }
];

export default routesConfig;
