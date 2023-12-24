import { FC } from 'react';
import TrendingItem from '../../ui/TrendingItem';
import { useTrending } from './useTrending';
import StyledTrending from '../../ui/StyledTrending';

interface Trending {
     header: string;
     paragraph: string;
}

interface Car {
     _id: string;
     id: string;
     image: string;
     location: string;
     name: string;
}

const TrendingLists: FC<Trending> = ({ header, paragraph }) => {
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
                    {cars.map((car: Car) => (
                         <TrendingItem
                              key={car.id}
                              image={car.image}
                              location={car.location}
                              name={car.name}
                         />
                    ))}
               </div>
          </StyledTrending>
     );
};

export default TrendingLists;
