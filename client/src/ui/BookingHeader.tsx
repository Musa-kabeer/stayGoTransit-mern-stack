import { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import { Booking } from '../helpers/interfaces';

const BookingHeader: FC<Booking> = ({ name, shortDescription, price }) => {
     return (
          <section className='booking_header'>
               <div className='left_content'>
                    <h1>
                         {name}{' '}
                         <span>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                         </span>
                    </h1>

                    <p>{shortDescription}</p>

                    <span>(324 reviews)</span>
               </div>

               <div></div>

               <div className='price'>₦{price}</div>
          </section>
     );
};

export default BookingHeader;
