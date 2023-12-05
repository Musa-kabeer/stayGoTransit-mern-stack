import { styled } from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';

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

const BookingAmenities = () => {
     return (
          <StyledBookingAmenities>
               <h2>Amenities</h2>

               <ul className='amenities_lists'>
                    <li className='amenities_list'>
                         <GiCheckMark />
                         Free WiFi
                    </li>

                    <li className='amenities_list'>
                         <GiCheckMark />
                         Free WiFi
                    </li>

                    <li className='amenities_list'>
                         <GiCheckMark />
                         Free WiFi
                    </li>

                    <li className='amenities_list'>
                         <GiCheckMark />
                         Free WiFi
                    </li>

                    <li className='amenities_list'>
                         <GiCheckMark />
                         Free WiFi
                    </li>

                    <li className='amenities_list'>
                         <GiCheckMark />
                         Free WiFi
                    </li>

                    <li className='amenities_list'>
                         <GiCheckMark />
                         Free WiFi
                    </li>
               </ul>
          </StyledBookingAmenities>
     );
};

export default BookingAmenities;
