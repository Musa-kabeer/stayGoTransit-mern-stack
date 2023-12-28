import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useSearchRooms = () => {
     /**
      *  importing .env neccessary variables
      */
     const { MODE, VITE_DEV_BACKEND_URL, VITE_PROD_BACKEND_URL } = import.meta
          .env;

     const { name, town, uniqueId } = useParams();

     const { status, data: rooms } = useQuery({
          queryKey: ['search_rooms'],
          queryFn: async () => {
               try {
                    const response = await fetch(
                         `${
                              MODE === 'production'
                                   ? VITE_PROD_BACKEND_URL
                                   : VITE_DEV_BACKEND_URL
                         }/api/v1/rooms?hotelName=${name}&uniqueId=${uniqueId}&town=${town}&state=${town}`
                    );

                    const data = await response.json();

                    return data.rooms;
               } catch (err: unknown) {
                    console.log(err);
               }
          },
     });

     return { status, rooms };
};
