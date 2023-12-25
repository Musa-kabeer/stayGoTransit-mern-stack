import { FC } from 'react';
import TrendingItem from '../../ui/TrendingItem';
import { useTrending } from './useTrending';
import StyledTrending from '../../ui/StyledTrending';
import { Trending, TrendingProps } from '../../helpers/interfaces';

const TrendingLists: FC<TrendingProps> = ({ header, paragraph }) => {
     const { status, trains } = useTrending();

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
                    {trains.map((train: Trending) => (
                         <TrendingItem
                              key={train.id}
                              image={train.image}
                              location={train.location}
                              name={train.name}
                              link={`/s/trains/${train.name}/${train.location}`}
                         />
                    ))}
               </div>
          </StyledTrending>
     );
};

export default TrendingLists;
