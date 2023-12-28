import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useBooking = () => {
     const { bookingId } = useParams();

     const { MODE, VITE_DEV_BACKEND_URL, VITE_PROD_BACKEND_URL } = import.meta
          .env;

     const { status, data: booking } = useQuery({
          queryKey: [`booking ${bookingId}`],

          queryFn: async () => {
               try {
                    const response = await fetch(
                         `${
                              MODE === 'production'
                                   ? VITE_PROD_BACKEND_URL
                                   : VITE_DEV_BACKEND_URL
                         }/api/v1/rooms/${bookingId}`
                    );

                    const data = await response.json();

                    return data.room;
               } catch (err: unknown) {
                    console.log(err);
               }
          },
     });

     return { status, booking };
};
