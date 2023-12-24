import { FC } from 'react';
import styled from 'styled-components';
import TrendingItem from '../../ui/TrendingItem';
import { useTrending } from './useTrending';

interface Trending {
     header: string;
     paragraph: string;
}

interface Hotel {
     _id: string;
     id: string;
     image: string;
     location: string;
     name: string;
}

const StyledLargeLists = styled.section`
     display: flex;
     flex-direction: column;
     row-gap: 25px;
     padding: 0 20px;

     @media screen and (max-width: 764px) {
          padding: 0px 50px;
     }

     h1 {
          font-size: 1.8rem;
          text-align: center;
          font-weight: 600;
     }

     p {
          text-align: center;
          font-size: 1rem;
          color: var(--primary-gray-100);
          font-weight: 200;
     }

     .trending_items {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 13px;
          row-gap: 20px;

          @media screen and (max-width: 1024px) {
               grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          @media screen and (max-width: 764px) {
               grid-template-columns: repeat(1, minmax(0, 1fr));
          }
     }
`;

const TrendingLists: FC<Trending> = ({ header, paragraph }) => {
     const { status, hotels } = useTrending();

     if (status === 'pending') {
          return 'Loading...';
     }

     if (status === 'error') {
          return 'Connection Error!';
     }

     return (
          <StyledLargeLists>
               <h1>{header}</h1>
               <p>{paragraph}</p>

               <div className='trending_items'>
                    {hotels.map((hotel: Hotel) => (
                         <TrendingItem
                              key={hotel.id}
                              image={hotel.image}
                              location={hotel.location}
                              name={hotel.name}
                         />
                    ))}
               </div>
          </StyledLargeLists>
     );
};

export default TrendingLists;
