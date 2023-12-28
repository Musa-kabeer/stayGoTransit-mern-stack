import { useBooking } from './useBooking';
import BookingDetails from '../../ui/BookingDetails';
import BookingHeader from '../../ui/BookingHeader';
import BookingImages from '../../ui/BookingImages';
import Footer from '../../ui/Footer';
import StyledBooking from '../../ui/StyledBooking';

export const Booking = () => {
     const { status, booking } = useBooking();

     if (status === 'pending') {
          return 'Loading....';
     }

     return (
          <StyledBooking>
               {/* HEADER */}
               <BookingHeader
                    name={booking.name}
                    shortDescription={booking.shortDescription}
                    price={booking.price}
               />

               {/* IMAGES */}
               <BookingImages images={booking.images} />

               {/* BOOKING DETAILS */}
               <BookingDetails />

               {/* FOOTER */}
               <Footer />
          </StyledBooking>
     );
};
