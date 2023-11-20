import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

interface IHotel {
     name: string;
     star: number;
     city: string;
     image: string;
}

const StyleBox = styled.div`
     width: 100%;
     max-height: 800px;
     border-radius: var(--border-radius);
     display: flex;
     flex-direction: column;
     row-gap: 10px;

     .image_container {
          border-radius: var(--border-radius);
          height: 250px;

          img {
               width: 100%;
               height: 100%;
               object-fit: cover;
               border-radius: var(--border-radius);
          }
     }

     .content_container {
          h4 {
               font-size: 13px;
          }
     }

     .content_container {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .name {
               font-size: 1rem;
               color: var(--primary-gray-100);
          }

          .stars {
               font-size: 1rem;
               font-weight: 200;
               color: orange;
               display: flex;
               gap: 0.3rem;
          }

          .cities {
               font-size: 0.8rem;
               font-weight: 300;
               color: var(--primary-gray-100);
          }
     }
`;

const HotelBox: React.FC<IHotel> = ({ name, star, city, image }) => {
     return (
          <StyleBox>
               <div className='image_container'>
                    <img src={image} alt={name} />
               </div>

               <div className='content_container'>
                    <div className='name'>{name}</div>

                    <div className='stars'>
                         {Array.from({ length: star }, (_, i) => i + 1).map(
                              (_, i) => (
                                   <FaStar key={i + 1} className='star' />
                              )
                         )}
                    </div>

                    <div className='cities'>{city}</div>
               </div>
          </StyleBox>
     );
};

export default HotelBox;
