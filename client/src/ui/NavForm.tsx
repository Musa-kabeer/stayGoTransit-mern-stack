import { useState } from 'react';
import styled from 'styled-components';
// Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// icons
import { CiSearch } from 'react-icons/ci';
// date
import { addDays } from 'date-fns';
import { dayOfTomorrow, dayOfWeek, month, today } from '../helpers/utils';

const StyledForm = styled.form`
     display: flex;
     justify-content: space-between;
     column-gap: 5px;
     padding: 7px 10px;
     margin: 0 3rem;
     background-color: var(--tertiary-blue-950);
     border-radius: var(--border-radius);

     button {
          width: 80px;
          color: var(--tertiary-gray-900);
          background: var(--primary-gray-50);
          border-radius: var(--border-radius);
          cursor: pointer;

          .item_content--icons {
               font-size: 20px;
               font-weight: 700;
          }

          &:hover {
               background: var(--primary-gray-200);
          }
     }

     .date_container {
          width: 190px;
          position: relative;

          .date_btns {
               display: flex;
               align-items: center;
               column-gap: 0.5px;
               background: var(--primary-gray-50);
               border-radius: var(--border-radius);

               .stick {
                    height: 10px;
                    width: 1px;
                    background-color: var(--primary-gray-300);
               }

               .date_btn {
                    width: 100px;
                    padding: 0.7rem 0.6rem;
                    font-size: 12px;
                    font-weight: 300;
                    height: 100%;
                    cursor: pointer;
                    letter-spacing: var(--letter-spacing);
                    text-align: center;

                    &:hover {
                         background: var(--primary-gray-200);
                         border-radius: var(--border-radius);
                    }
               }
          }

          .date_picker {
               position: absolute;
               top: 3rem;
               z-index: 99;

               > div {
                    box-shadow: var(--date-shadow-1);
               }
          }
     }

     @media screen and (max-width: 764px) {
          display: none;
     }
`;

const NavForm = () => {
     const [dateShow, setDateShow] = useState(false);
     const [startDate, setStartDate] = useState<Date>(new Date());
     const [endDate, setEndDate] = useState<Date | null>(null);

     const handleDateFormClicked = () => {
          setDateShow((date) => !date);
     };

     const onChange = (dates: [Date, Date]) => {
          const [start, end] = dates;

          setStartDate(start);
          setEndDate(end);
     };

     // TO SELECTED DATE
     const toDate = endDate ? endDate : addDays(new Date(), 1);
     const toMonth = endDate ? endDate : new Date();
     const toDay = endDate ? endDate : addDays(new Date(), 1);

     return (
          <StyledForm>
               <div className='date_container'>
                    <div className='date_btns' onClick={handleDateFormClicked}>
                         <div className='date_btn'>
                              <span>{dayOfWeek(startDate)}</span>{' '}
                              <span>{month(startDate)}</span>/
                              <span>{today(startDate)}</span>
                         </div>

                         <span className='stick'></span>

                         <div className='date_btn'>
                              <span>{dayOfTomorrow(toDate)}</span>{' '}
                              <span>{month(toMonth)}</span>/
                              <span>{today(toDay)}</span>
                         </div>
                    </div>

                    {dateShow && (
                         <div className='date_picker'>
                              <DatePicker
                                   selected={startDate}
                                   onChange={onChange}
                                   startDate={startDate}
                                   endDate={endDate}
                                   selectsRange
                                   inline
                                   minDate={new Date()}
                              />
                         </div>
                    )}
               </div>

               <button>
                    <CiSearch className='item_content--icons' />
               </button>
          </StyledForm>
     );
};

export default NavForm;
