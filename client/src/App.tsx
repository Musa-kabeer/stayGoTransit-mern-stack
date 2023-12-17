import { lazy, Suspense } from 'react';
import {
     createBrowserRouter,
     Navigate,
     RouterProvider,
} from 'react-router-dom';
import { AsideContextProvider } from './context/AsideContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { SearchNavigationProvider } from './context/SearchNavigationContext';
import Booking from './pages/Booking';
import Review from './pages/Review';

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

     {
          path: '/booking/:bookingId',
          element: <Booking />,
     },

     {
          path: '/stays/reviews/:id',
          element: <Review />,
     },
]);

const App = () => {
     const queryClient = new QueryClient({
          defaultOptions: {
               queries: {
                    staleTime: 60 * 1000, // 1 minutes
               },
          },
     });

     return (
          <>
               <QueryClientProvider client={queryClient}>
                    <AsideContextProvider>
                         <SearchNavigationProvider>
                              <RouterProvider router={router} />
                         </SearchNavigationProvider>
                    </AsideContextProvider>
               </QueryClientProvider>

               <Toaster
                    position='top-left'
                    gutter={8}
                    toastOptions={{
                         // Define default options
                         style: {
                              background: '#282828',
                              color: '#fff',
                              fontSize: '12px',
                         },

                         // Default options for specific types
                         // success: {
                         //      duration: 2000,
                         //      theme: {
                         //           primary: 'green',
                         //           secondary: 'black',
                         //      },
                         // },
                    }}
               />
          </>
     );
};

export default App;
