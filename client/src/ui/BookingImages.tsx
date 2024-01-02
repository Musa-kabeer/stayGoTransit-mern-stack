import { FC } from 'react';
import { Booking } from '../helpers/interfaces';

const BookingImages: FC<Booking> = ({ images }) => {
     return (
          <section className='images'>
               {images?.map((img, i) => (
                    <img src={img} alt={`image number ${i + 1}`} key={i + 1} />
               ))}
          </section>
     );
};

export default BookingImages;
