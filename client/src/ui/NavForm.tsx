import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { LiaBedSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';
import { addDays } from 'date-fns';
import { dayOfTomorrow, dayOfWeek, month, today } from '../helpers/utils';

const StyledForm = styled.form`
     background-color: var(--tertiary-blue-950);
     padding: 7px 10px;
     border-radius: var(--border-radius);

     display: flex;
     column-gap: 5px;

     .input_container {
          width: 220px;
          display: flex;
          align-items: center;
          column-gap: 7px;
          padding: 0 10px;
          background-color: var(--primary-gray-50);
          border-radius: var(--border-radius);

          .item_content--icons {
               font-size: var(--large-text);
          }

          input {
               width: 100%;
               height: 100%;
               outline: none;
               font-size: 15px;
               font-weight: 100;
               transition: all 0.4s ease-in-out;
               background-color: var(--primary-gray-50);

               &::placeholder {
                    font-size: 13px;
                    color: var(--secondary-gray-500);
                    font-style: italic;
               }
          }
     }

     button {
          width: 40px;
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
                    padding: 0.7rem 0.6rem;
                    font-size: 12px;
                    font-weight: 300;
                    height: 100%;
                    cursor: pointer;
                    letter-spacing: var(--letter-spacing);

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
               <div className='input_container'>
                    <LiaBedSolid className='item_content--icons' />{' '}
                    <input
                         type='text'
                         defaultValue='Abuja, Nigeria'
                         placeholder='Enter a city, hotel'
                    />
               </div>

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
