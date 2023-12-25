import { FC } from 'react';
import StyledTrendingItem from './StyledTrendingItem';
import { TrendingItem } from '../helpers/interfaces';

const TrendingItem: FC<TrendingItem> = ({ link, image, location, name }) => {
     return (
          <StyledTrendingItem to={link}>
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
          </StyledTrendingItem>
     );
};

export default TrendingItem;
