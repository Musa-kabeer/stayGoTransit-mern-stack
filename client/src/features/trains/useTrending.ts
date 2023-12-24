import { useQuery } from '@tanstack/react-query';
import { SERVER_DOMAIN } from '../../helpers/utils';

export const useTrending = () => {
     const { status, data: trains } = useQuery({
          queryKey: ['trending_trains'],
          queryFn: async () => {
               try {
                    const response = await fetch(
                         `${SERVER_DOMAIN}/api/v1/trains`
                    );

                    const data = await response.json();

                    return data.trains;
               } catch (err: unknown) {
                    console.log(err);
               }
          },
     });

     return { status, trains };
};
