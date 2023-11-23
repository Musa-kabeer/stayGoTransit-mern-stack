import { lazy, Suspense } from 'react';
import {
     createBrowserRouter,
     Navigate,
     RouterProvider,
} from 'react-router-dom';
import { AsideContextProvider } from './context/AsideContext';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const SuspenseFallback = lazy(() => import('./ui/SuspenseFallback'));
const Error = lazy(() => import('./pages/Error'));
const Homepage = lazy(() => import('./pages/Homepage'));
const CarRental = lazy(() => import('./pages/CarRental'));
const TrainAndBuses = lazy(() => import('./pages/TrainAndBuses'));

const router = createBrowserRouter([
     {
          path: '/',
          element: <AppLayout />,
          errorElement: <Error />,
          children: [
               {
                    path: '/',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <Navigate to='/stays' />,
                         </Suspense>
                    ),
               },

               {
                    path: '/stays',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <Homepage />,
                         </Suspense>
                    ),
               },

               {
                    path: 'car-rental',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <CarRental />,
                         </Suspense>
                    ),
               },

               {
                    path: 'trains-buses',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <TrainAndBuses />,
                         </Suspense>
                    ),
               },

               {
                    path: 'explore',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <h1>Explore</h1>,
                         </Suspense>
                    ),
               },

               {
                    path: 'feedback',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <h1>Feedback</h1>,
                         </Suspense>
                    ),
               },

               {
                    path: 'trips',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <h1>Trips</h1>,
                         </Suspense>
                    ),
               },

               {
                    path: 'hotels-search/:searchName',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <h1>Hotel Search</h1>,
                         </Suspense>
                    ),
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
