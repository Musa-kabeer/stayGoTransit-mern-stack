import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import StyledResult from '../../ui/StyledSearchResult';
import { FC } from 'react';
// import { Room } from '../../helpers/interfaces';

interface Room {
     image: string;
     name: string;
     price: number;
     amenity_one: string;
     amenity_two: string;
     len: number;
     address: string;
     to: string;
}

const SearchResult: FC<Room> = ({
     image,
     name,
     price,
     amenity_one,
     amenity_two,
     len,
     address,
     to,
}) => {
     return (
          <StyledResult to={to}>
               <div className='left_result'>
                    <div className='image_container'>
                         <img src={image} alt={name} />

                         <div>
                              <CiHeart />
                         </div>
                    </div>

                    <div className='content'>
                         <div className='content_top'>
                              <Link to={to}>{name}</Link>

                              <address>{address}</address>
                         </div>

                         <div className='content_bottom'>
                              <span>{amenity_one}</span>
                              <span>{amenity_two}</span>

                              <span>+{len} others</span>
                         </div>
                    </div>
               </div>

               <div className='right_result'>
                    <h2>₦{price}</h2>
                    <span>vrbo</span>
                    <button>View Deal</button>
               </div>
          </StyledResult>
     );
};

export default SearchResult;
