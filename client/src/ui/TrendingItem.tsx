import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled(Link)`
     display: flex;
     background: var(--primary-gray-100);
     height: 110px;
     border-radius: var(--border-radius);
     text-decoration: none;

     &:hover {
          text-decoration: underline;
     }

     .image_encapsulation {
          width: 50%;
     }

     img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          width: 100%;
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
     }

     .content {
          padding: 10px;
          width: 50%;

          .header {
               font-size: 0.8rem;
               text-align: left;
               line-height: 23px;
               color: black;
               text-transform: uppercase;
          }

          span {
               font-weight: 200;
          }
     }
`;

interface Hotel {
     image: string;
     location: string;
     name: string;
}

const TrendingItem: FC<Hotel> = ({ image, location, name }) => {
     return (
          <StyledList to='/'>
               <div className='image_encapsulation'>
                    <img src={image} alt={name} />
               </div>

               <div className='content'>
                    <h1 className='header'>
                         <span>rental in</span>
                         <br />
                         {location}
                    </h1>
               </div>
          </StyledList>
     );
};

export default TrendingItem;
