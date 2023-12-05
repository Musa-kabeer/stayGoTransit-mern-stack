import { styled } from 'styled-components';

const StyledBookingImages = styled.div`
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

               {/* <iframe
                              key={1}
                              title='Hotel Iframe'
                              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.4114516017045!2d4.5336231!3d7.7661358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037339f67239e7f%3A0x6d7d8105403b16b7!2sAdolak%20Hotel!5e0!3m2!1sen!2sng!4v1668535390812!5m2!1sen!2sng'
                              width='600'
                              height='400'
                              allowFullScreen
                         /> */}
          </StyledBookingImages>
     );
};

export default BookingImages;
