import styled from 'styled-components';
import BookingAmenities from './BookingAmenities';
import BookingDescription from './BookingDescription';
import BookingMap from './BookingMap';
import BookingReviews from './BookingReviews';
import BookingCheckout from './BookingCheckout';

const StyledBookingDetail = styled.section`
     display: flex;
     gap: 20px;

     .details {
          flex: 5;

          display: flex;
          flex-direction: column;
          gap: 50px;
     }

     .details_text {
          border: 1px solid #c0c0c0d2;
     }

     .amenities_gift {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 2rem;
          border-bottom: 1px solid #c0c0c0d2;
     }

     .checkout {
          flex: 3;

          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 2rem;
          border: 1px solid #c0c0c0d2;
          height: 100%;
     }
`;

const BookingDetails = () => {
     return (
          <StyledBookingDetail>
               <div className='details'>
                    <div className='details_text'>
                         <div className='amenities_gift'>
                              {/* <BookingGift /> */}

                              <BookingAmenities />
                         </div>

                         <BookingDescription />
                    </div>

                    <BookingMap />

                    <BookingReviews />
               </div>

               <div className='checkout'>
                    <BookingCheckout />
               </div>
          </StyledBookingDetail>
     );
};

export default BookingDetails;
