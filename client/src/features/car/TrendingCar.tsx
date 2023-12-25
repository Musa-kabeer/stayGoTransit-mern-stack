import { FC } from 'react';
import TrendingItem from '../../ui/TrendingItem';
import { useTrending } from './useTrending';
import StyledTrending from '../../ui/StyledTrending';
import { Trending, TrendingProps } from '../../helpers/interfaces';

const TrendingLists: FC<TrendingProps> = ({ header, paragraph }) => {
     const { status, cars } = useTrending();

     if (status === 'pending') {
          return 'Loading...';
     }

     if (status === 'error') {
          return 'Connection Error!';
     }

     return (
          <StyledTrending>
               <h1>{header}</h1>
               <p>{paragraph}</p>

               <div className='trending_items'>
                    {cars.map((car: Trending) => (
                         <TrendingItem
                              key={car.id}
                              image={car.image}
                              location={car.location}
                              name={car.name}
                              link={`/s/car-rental/${car.name}/${car.location}`}
                         />
                    ))}
               </div>
          </StyledTrending>
     );
};

export default TrendingLists;
