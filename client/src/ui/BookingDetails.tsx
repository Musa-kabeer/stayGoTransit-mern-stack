import styled from 'styled-components';
import BookingGift from './BookingGift';
import BookingAmenities from './BookingAmenities';

const StyledBookingDetail = styled.section`
     display: flex;

     .descriptions {
          flex: 2;
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
          flex: 1;
     }
`;

const BookingDetails = () => {
     return (
          <StyledBookingDetail>
               <div className='descriptions'>
                    <div className='amenities_gift'>
                         <BookingGift />

                         <BookingAmenities />
                    </div>

                    <div className='description_details'>
                         <h2>Description</h2>

                         <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Dolore provident a repellat
                              suscipit est reiciendis, dolor deleniti itaque
                              ipsum veniam.
                         </p>
                    </div>
               </div>

               <div className='checkout'></div>
          </StyledBookingDetail>
     );
};

export default BookingDetails;
