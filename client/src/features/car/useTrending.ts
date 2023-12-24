import { useQuery } from '@tanstack/react-query';
import { SERVER_DOMAIN } from '../../helpers/utils';

export const useTrending = () => {
     const { status, data: cars } = useQuery({
          queryKey: ['trending_cars'],
          queryFn: async () => {
               try {
                    const response = await fetch(
                         `${SERVER_DOMAIN}/api/v1/cars`
                    );

                    const data = await response.json();

                    return data.cars;
               } catch (err: unknown) {
                    console.log(err);
               }
          },
     });

     return { status, cars };
};
