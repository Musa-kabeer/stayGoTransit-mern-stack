import { styled } from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import { FC } from 'react';
import { Booking } from '../helpers/interfaces';

const StyledBookingAmenities = styled.div`
     display: flex;
     flex-direction: column;
     gap: 20px;

     h2 {
          font-size: 17px;
          color: var(--tertiary-gray-800);
     }

     .amenities_lists {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          padding-left: 0;
     }

     .amenities_list {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 400;
     }

     .amenities_list svg {
          font-size: 20px;
          font-weight: 900;
     }
`;

const BookingAmenities: FC<Booking> = ({ amenities }) => {
     return (
          <StyledBookingAmenities>
               <h2>Amenities</h2>

               <ul className='amenities_lists'>
                    {amenities?.map((amenity, i) => (
                         <li className='amenities_list' key={i + 1}>
                              <GiCheckMark />
                              {amenity}
                         </li>
                    ))}
               </ul>
          </StyledBookingAmenities>
     );
};

export default BookingAmenities;
