import { useQuery } from '@tanstack/react-query';

export const useTrending = () => {
     /**
      *  importing .env neccessary variables
      */
     const { MODE, VITE_DEV_BACKEND_URL, VITE_PROD_BACKEND_URL } = import.meta
          .env;

     const { status, data: hotels } = useQuery({
          queryKey: ['trending_hotel'],
          queryFn: async () => {
               try {
                    const response = await fetch(
                         `${
                              MODE === 'production'
                                   ? VITE_PROD_BACKEND_URL
                                   : VITE_DEV_BACKEND_URL
                         }/api/v1/hotels`
                    );

                    const data = await response.json();

                    return data.hotels;
               } catch (err: unknown) {
                    console.log(err);
               }
          },
     });

     return { status, hotels };
};
