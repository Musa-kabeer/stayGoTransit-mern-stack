import { FC } from 'react';
import BookingAmenities from './BookingAmenities';
import BookingDescription from './BookingDescription';
import BookingMap from './BookingMap';
import BookingReviews from './BookingReviews';
import BookingCheckout from './BookingCheckout';
import { Booking } from '../helpers/interfaces';

const BookingDetails: FC<Booking> = ({
     amenities,
     description,
     location,
     price,
}) => {
     return (
          <section className='booking_detail'>
               <div className='details'>
                    <div className='details_text'>
                         <div className='amenities_gift'>
                              <BookingAmenities amenities={amenities} />
                         </div>

                         <BookingDescription description={description} />
                    </div>

                    <BookingMap location={location} />

                    <BookingReviews />
               </div>

               <div className='checkout'>
                    <BookingCheckout price={price} />
               </div>
          </section>
     );
};

export default BookingDetails;
