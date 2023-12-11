import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const StyledHeader = styled.section`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 1.5rem 0;

     .left_content {
          h1 {
               display: flex;
               align-items: center;
               gap: 10px;
               font-size: 18px;
               font-weight: 700;

               color: var(--tertiary-gray-800);
          }
     }

     .right_content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          .price {
               font-size: 25px;
               font-weight: 500;
          }

          button {
               padding: 1rem;
               background: var(--tertiary-blue-800);
               color: var(--primary-gray-200);
               border-radius: 3px;
               transition: all 0.3s ease-in-out;

               &:hover {
                    background: var(--tertiary-blue-950);
               }
          }
     }
`;

const BookingHeader = () => {
     return (
          <StyledHeader>
               <div className='left_content'>
                    <h1>
                         Conrad New York{' '}
                         <span>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                         </span>
                    </h1>

                    <p>
                         Lorem ipsum dolor, sit amet consectetur adipisicing
                         elit.
                    </p>

                    <span>(324 reviews)</span>
               </div>

               <div className='right_content'>
                    <div className='price'>$334</div>
                    <button>Choose a Room</button>
               </div>
          </StyledHeader>
     );
};

export default BookingHeader;
