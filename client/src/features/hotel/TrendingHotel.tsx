import { FC } from 'react';
import TrendingItem from '../../ui/TrendingItem';
import { useTrending } from './useTrending';
import StyledTrending from '../../ui/StyledTrending';
import { Trending, TrendingProps } from '../../helpers/interfaces';

const TrendingLists: FC<TrendingProps> = ({ header, paragraph }) => {
     const { status, hotels } = useTrending();

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
                    {hotels.map((hotel: Trending) => (
                         <TrendingItem
                              key={hotel.id}
                              image={hotel.image}
                              location={hotel.location}
                              name={hotel.name}
                         />
                    ))}
               </div>
          </StyledTrending>
     );
};

export default TrendingLists;
