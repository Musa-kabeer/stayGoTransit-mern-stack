import { MdBreakfastDining } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa6';
import { CiParking1 } from 'react-icons/ci';
import { styled } from 'styled-components';

const StyledGift = styled.div`
     display: flex;
     flex-direction: column;
     gap: 14px;

     h2 {
          font-size: 17px;
          color: var(--tertiary-gray-800);
     }

     .gift_items {
          display: flex;
          gap: 10px;
     }

     .gift_items div {
          display: flex;
          gap: 7px;
          align-items: center;
     }

     .gift_items svg {
          padding: 10px;
          font-size: 40px;
          border: 1px solid var(--secondary-gray-500);
          border-radius: 4px;
     }
`;

const BookingGift = () => {
     return (
          <StyledGift>
               <h2>Included for free</h2>

               <div className='gift_items'>
                    <div>
                         <FaWifi />
                         <span>
                              Free <br /> Internet
                         </span>
                    </div>

                    <div>
                         <MdBreakfastDining />
                         <span>
                              Free <br /> Breakfast
                         </span>
                    </div>

                    <div>
                         <CiParking1 />
                         <span>
                              Free <br /> Parking
                         </span>
                    </div>
               </div>
          </StyledGift>
     );
};

export default BookingGift;
