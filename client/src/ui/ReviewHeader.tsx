import { styled } from 'styled-components';
import { FaStar } from 'react-icons/fa';
import SelectComponent from './SelectComponent';

const StyleReviewHeader = styled.div`
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid #ecececc7;
     padding: 2rem 0;

     .left_hand_side {
          display: flex;
          flex-direction: column;
          row-gap: 10px;

          h1 {
               font-size: 27px;
               font-weight: 700;
               color: var(--tertiary-gray-800);
          }

          p {
               font-size: 12px;
          }

          .ratings {
               display: flex;
               align-items: center;
               column-gap: 10px;

               .stars {
                    display: flex;
                    align-items: center;
                    column-gap: 7px;
                    font-size: 20px;

                    svg {
                         color: orange;
                    }
               }
          }
     }

     .right_hand_side {
          width: 25%;
     }
`;

const ReviewHeader = () => {
     return (
          <StyleReviewHeader>
               <div className='left_hand_side'>
                    <h1>Galad Hotel</h1>

                    <p>
                         Lorem ipsum dolor, sit amet consectetur adipisicing
                         elit. Assumenda?
                    </p>

                    <div className='ratings'>
                         <h3>5.0</h3>
                         <div className='stars'>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                         </div>
                    </div>
               </div>

               <div className='right_hand_side'>
                    <SelectComponent />
               </div>
          </StyleReviewHeader>
     );
};

export default ReviewHeader;
