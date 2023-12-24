import { useQuery } from '@tanstack/react-query';
import { SERVER_DOMAIN } from '../../helpers/utils';

export const useTrending = () => {
     const { status, data: hotels } = useQuery({
          queryKey: ['trending_hotel'],
          queryFn: async () => {
               try {
                    const response = await fetch(
                         `${SERVER_DOMAIN}/api/v1/hotels`
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
