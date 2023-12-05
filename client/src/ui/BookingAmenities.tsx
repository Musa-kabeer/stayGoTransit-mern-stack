import { styled } from 'styled-components';
import { CiWifiOn } from 'react-icons/ci';

const StyledBookingAmenities = styled.div`
     display: flex;
     flex-direction: column;
     width: 40%;
     gap: 20px;

     h2 {
          font-size: 2rem;
          font-weight: 600;
          color: var(--tertiary-gray-800);
     }

     ul {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          row-gap: 20px;
          column-gap: 10px;
          padding-left: 0;
     }
`;

const BookingAmenities = () => {
     return (
          <StyledBookingAmenities>
               <h2>Featured Amenities</h2>

               <ul>
                    <li>
                         <span>
                              <CiWifiOn />
                         </span>{' '}
                         Free WiFi
                    </li>

                    <li>
                         <span>
                              <CiWifiOn />
                         </span>{' '}
                         Free WiFi
                    </li>

                    <li>
                         <span>
                              <CiWifiOn />
                         </span>{' '}
                         Free WiFi
                    </li>

                    <li>
                         <span>
                              <CiWifiOn />
                         </span>{' '}
                         Free WiFi
                    </li>

                    <li>
                         <span>
                              <CiWifiOn />
                         </span>{' '}
                         Free WiFi
                    </li>

                    <li>
                         <span>
                              <CiWifiOn />
                         </span>{' '}
                         Free WiFi
                    </li>

                    <li>
                         <span>
                              <CiWifiOn />
                         </span>{' '}
                         Free WiFi
                    </li>
               </ul>
          </StyledBookingAmenities>
     );
};

export default BookingAmenities;
