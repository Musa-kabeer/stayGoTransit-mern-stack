import { FC } from 'react';

interface Images {
     images: string[];
}

const BookingImages: FC<Images> = ({ images }) => {
     return (
          <section className='images'>
               {images.map((img, i) => (
                    <img src={img} alt={`image number ${i + 1}`} />
               ))}
          </section>
     );
};

export default BookingImages;
