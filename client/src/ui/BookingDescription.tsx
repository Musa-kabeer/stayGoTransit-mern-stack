import { FC } from 'react';
import { styled } from 'styled-components';
import { Booking } from '../helpers/interfaces';

const StyledBookingDescription = styled.div`
     display: flex;
     flex-direction: column;
     gap: 20px;
     padding: 2rem;

     h2 {
          font-size: 17px;
          color: var(--tertiary-gray-800);
     }

     p {
          line-height: 25px;

          font-size: 13px;
     }
`;

const BookingDescription: FC<Booking> = ({ description }) => {
     return (
          <StyledBookingDescription>
               <h2>Description</h2>

               <p>{description}</p>
          </StyledBookingDescription>
     );
};

export default BookingDescription;
