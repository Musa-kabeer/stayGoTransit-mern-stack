import { styled } from 'styled-components';
import BookingSlider from './BookingSlider';

const StyledBookingImages = styled.section`
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     justify-content: center;
     align-items: center;
     gap: 5px;

     img:nth-child(1),
     img:nth-child(2) {
          grid-column: span 2;
     }

     img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
     }
`;

const BookingImages = () => {
     return (
          <>
               <StyledBookingImages>
                    <img
                         src='https://www.choicehotels.com/hotelmedia/US/LA/lake-charles/LA165/1280/LA165SNK1_1.webp'
                         alt=''
                    />

                    <img
                         src='https://www.choicehotels.com/hotelmedia/US/LA/lake-charles/LA165/1280/LA165SNK1_1.webp'
                         alt=''
                    />
                    <img
                         src='https://www.choicehotels.com/hotelmedia/US/LA/lake-charles/LA165/1280/LA165SNK1_1.webp'
                         alt=''
                    />
                    <img
                         src='https://www.choicehotels.com/hotelmedia/US/LA/lake-charles/LA165/1280/LA165SNK1_1.webp'
                         alt=''
                    />

                    <img
                         src='https://www.choicehotels.com/hotelmedia/US/LA/lake-charles/LA165/1280/LA165SNK1_1.webp'
                         alt=''
                    />

                    <img
                         src='https://www.choicehotels.com/hotelmedia/US/LA/lake-charles/LA165/1280/LA165SNK1_1.webp'
                         alt=''
                    />
               </StyledBookingImages>

               <BookingSlider />
          </>
     );
};

export default BookingImages;
