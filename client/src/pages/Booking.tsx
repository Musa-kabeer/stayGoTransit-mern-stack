import styled from 'styled-components';
import Footer from '../ui/Footer';
import BookingHeader from '../ui/BookingHeader';
import BookingImages from '../ui/BookingImages';
import BookingDetails from '../ui/BookingDetails';

const StyledBooking = styled.div`
     background: #fff;
     height: 100%;
     padding: 2rem 10rem 0 10rem;

     display: flex;
     flex-direction: column;
     gap: 30px;
`;

const Booking = () => {
     return (
          <StyledBooking>
               {/* HEADER */}
               <BookingHeader />

               {/* IMAGES */}
               <BookingImages />

               {/* BOOKING DETAILS */}
               <BookingDetails />

               {/* FOOTER */}
               <Footer />
          </StyledBooking>
     );
};

export default Booking;
