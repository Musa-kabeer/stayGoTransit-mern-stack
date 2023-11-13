import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Error = lazy(() => import('./pages/Error'));
const Homepage = lazy(() => import('./pages/Homepage'));

const router = createBrowserRouter([
     {
          path: '/',
          element: <AppLayout />,
          errorElement: <Error />,
          children: [
               {
                    index: true,
                    element: <Homepage />,
               },
          ],
     },
]);

const App = () => {
     return (
          <>
               <RouterProvider router={router} />
          </>
     );
};

export default App;
