import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styled from 'styled-components';

const StyledCheckout = styled.div`
     display: flex;
     flex-direction: column;
     gap: 16px;

     h2 {
          font-size: 17px;
          color: var(--tertiary-gray-800);
     }

     .checkout_header {
          .header {
               height: 30px;
               display: grid;
               grid-template-columns: 1fr 1fr 1fr;
               justify-content: center;
               align-items: center;
          }

          .content {
               height: 40px;
               /* background-color: red; */
               display: grid;
               grid-template-columns: 1fr 1fr 1fr;
               justify-content: center;
               align-items: center;
               border: 1px solid #c0c0c0d2;

               .content_container {
                    padding: 0.7rem 0.5rem;
               }

               div:nth-child(2) {
                    border-left: 1px solid #c0c0c0d2;
                    border-right: 1px solid #c0c0c0d2;
               }
          }
     }

     .checkout_detail {
          display: flex;
          justify-content: space-between;

          .checkout_detail_lists {
               display: flex;
               flex-direction: column;
               gap: 10px;
          }

          .amount {
               font-size: 18px;
               font-weight: 800;
          }
     }

     button {
          height: 30px;
          background: var(--tertiary-blue-800);
          color: var(--primary-gray-200);
          border-radius: 3px;
          transition: all 0.3s ease-in-out;

          &:hover {
               background: var(--tertiary-blue-950);
          }
     }
`;

const BookingCheckout = () => {
     const [startDate, setStartDate] = useState(new Date());
     const [endDate, setEndDate] = useState(new Date());

     return (
          <StyledCheckout>
               <h2>Checkout the Room</h2>

               <div className='checkout_header'>
                    <div className='header'>
                         <div>Check-out</div>
                         <div>Check-in</div>
                         <div>Room & Guest</div>
                    </div>

                    <div className='content'>
                         <div className='content_container'>
                              <DatePicker
                                   selected={startDate}
                                   onChange={(date) =>
                                        date !== null && setStartDate(date)
                                   }
                              />
                         </div>
                         <div className='content_container'>
                              <DatePicker
                                   selected={endDate}
                                   onChange={(date) =>
                                        date !== null && setEndDate(date)
                                   }
                              />
                         </div>
                         <div className='content_container'>
                              <span>1</span> room, <span>1</span> guest
                         </div>
                    </div>
               </div>

               <div className='checkout_detail'>
                    <div className='checkout_detail_lists'>
                         <div className='guest'>No of Guests &rarr;</div>
                         <div className='rooms'>No of Rooms &rarr;</div>
                         <div className='date'>Date &rarr;</div>
                    </div>

                    <div className='amount'>$2000</div>
               </div>

               <button>Check out</button>
          </StyledCheckout>
     );
};

export default BookingCheckout;
