import { lazy } from 'react';
import {
     createBrowserRouter,
     Navigate,
     RouterProvider,
} from 'react-router-dom';
import { AsideContextProvider } from './context/AsideContext';

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
                    path: '/',
                    element: <Navigate to='/stays' />,
               },

               {
                    path: '/stays',
                    element: <Homepage />,
               },

               {
                    path: 'car-rental',
                    element: <h1>Car Rental</h1>,
               },

               {
                    path: 'trains-buses',
                    element: <h1>Trains And Buses</h1>,
               },

               {
                    path: 'explore',
                    element: <h1>Explore</h1>,
               },

               {
                    path: 'feedback',
                    element: <h1>Feedback</h1>,
               },

               {
                    path: 'trips',
                    element: <h1>Trips</h1>,
               },

               {
                    path: 'hotels-search/:searchName',
                    element: <h1>Hotel Search</h1>,
               },

               {
                    path: 'hotels/:hotelName',
                    element: <h1>Hotel Details</h1>,
               },

               {
                    path: 'hotels/bookings',
                    element: <h1>Hotel Details</h1>,
               },

               {
                    path: 'about-us',
                    element: <h1>About Us</h1>,
               },

               {
                    path: 'blogs',
                    element: <h1>BLOG</h1>,
               },

               {
                    path: 'faqs',
                    element: <h1>FAQs</h1>,
               },

               {
                    path: 'privacy-policy',
                    element: <h1>Privacy & Policy </h1>,
               },
          ],
     },
]);

const App = () => {
     return (
          <>
               <AsideContextProvider>
                    <RouterProvider router={router} />
               </AsideContextProvider>
          </>
     );
};

export default App;
