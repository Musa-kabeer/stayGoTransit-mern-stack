import { useQuery } from '@tanstack/react-query';

export const useTrending = () => {
     const { status, data: cars } = useQuery({
          queryKey: ['trending_cars'],
          queryFn: async () => {
               try {
                    const response = await fetch(
                         `${import.meta.env.VITE_BACKEND_URL}/api/v1/cars`
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
