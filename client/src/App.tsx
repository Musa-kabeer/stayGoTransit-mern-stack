import { lazy, Suspense } from 'react';
import {
     createBrowserRouter,
     Navigate,
     RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { SearchNavigationProvider } from './context/SearchNavigationContext';
import { AsideContextProvider } from './context/AsideContext';

/**
 *  ---------------------------
 *  APPLICATION PAGES
 *  ---------------------------
 */
const AppLayout = lazy(() => import('./ui/AppLayout'));
const SuspenseFallback = lazy(() => import('./ui/SuspenseFallback'));
const Error = lazy(() => import('./pages/Error'));
const Homepage = lazy(() => import('./pages/Homepage'));
const CarRental = lazy(() => import('./pages/CarRental'));
const TrainAndBuses = lazy(() => import('./pages/TrainAndBuses'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const Review = lazy(() => import('./pages/Review'));
const Booking = lazy(() => import('./pages/Booking'));

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
                    path: 'hotels-search/:searchName',
                    element: (
                         <Suspense fallback={<SuspenseFallback />}>
                              <SearchResults />
                         </Suspense>
                    ),
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
                    <ReactQueryDevtools initialIsOpen={false} />
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
                    }}
               />
          </>
     );
};

export default App;
