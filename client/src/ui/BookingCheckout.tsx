import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import { Booking, MySelectOption } from '../helpers/interfaces';
import SelectComponent from './SelectComponent';

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
               display: flex;
               align-items: center;
               justify-content: space-between;
               gap: 8px;
               border: 1px solid #c0c0c0d2;
               padding: 3px;
          }
     }

     .checkout_detail {
          display: flex;
          justify-content: space-between;

          .checkout_detail_lists {
               display: flex;
               flex-direction: column;
               gap: 10px;

               .date {
                    display: flex;
                    align-items: center;
               }
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
          cursor: pointer;

          &:hover {
               background: var(--tertiary-blue-950);
          }
     }
`;

const AdultOrChildOptions: MySelectOption[] = [
     { label: '1', value: '1' },
     { label: '2', value: '2' },
     { label: '3', value: '3' },
     { label: '4', value: '4' },
];

const BookingCheckout: FC<Booking> = ({ price }) => {
     const [value, setValue] = useState<DateRange<Dayjs>>([
          dayjs(new Date()) /** today */,
          dayjs(
               new Date().getTime() + 2 * 24 * 60 * 60 * 1000
          ) /** after 2 days */,
     ]);

     // useEffect(() => {
     const fromDate = dayjs(value.at(0).$d).format('DD/MM/YYYY');

     const toDate = dayjs(value.at(1).$d).format('DD/MM/YYYY');
     // }, []);

     return (
          <StyledCheckout>
               <h2>Checkout the Room</h2>

               <div className='checkout_header'>
                    <div className='header'>
                         <div>Check-out</div>
                         <div>Room & Guest</div>
                    </div>

                    <div className='content'>
                         <div>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                   <DemoContainer
                                        components={[
                                             'DateRangePicker',
                                             'DateRangePicker',
                                        ]}
                                   >
                                        <DemoItem
                                             label=''
                                             component='DateRangePicker'
                                        >
                                             <DateRangePicker
                                                  value={value}
                                                  onChange={(newValue) =>
                                                       setValue(newValue)
                                                  }
                                                  sx={{
                                                       '& fieldset': {
                                                            border: 'none',
                                                       },
                                                  }}
                                             />
                                        </DemoItem>
                                   </DemoContainer>
                              </LocalizationProvider>
                         </div>

                         <div>
                              <SelectComponent
                                   options={AdultOrChildOptions}
                                   placeholder='No of Adults'
                                   width='60px'
                              />
                         </div>

                         <div>
                              <SelectComponent
                                   options={AdultOrChildOptions}
                                   placeholder='No of Child'
                                   width='60px'
                              />
                         </div>
                    </div>
               </div>

               <div className='checkout_detail'>
                    <div className='checkout_detail_lists'>
                         <div className='guest'>
                              No of Guests &rarr; 0 Number of Guests
                         </div>
                         <div className='date'>
                              Date &rarr; &nbsp; <span>{fromDate}</span> &nbsp;
                              to &nbsp; <span>{toDate}</span>
                         </div>
                    </div>

                    <div className='amount'>₦{price}</div>
               </div>

               <button>Check out</button>
          </StyledCheckout>
     );
};

export default BookingCheckout;
