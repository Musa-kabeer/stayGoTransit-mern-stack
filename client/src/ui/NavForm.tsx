import { useState } from 'react';
import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import styled from 'styled-components';
import { LiaBedSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';

const StyledForm = styled.form`
     background-color: var(--tertiary-blue-950);
     padding: 10px 15px;
     border-radius: var(--border-radius);

     display: flex;
     column-gap: 8px;

     .input_container {
          width: 300px;
          display: flex;
          align-items: center;
          column-gap: 10px;
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

               transition: all 0.4s ease-in-out;
               font-size: var(--small-text);
          }
     }

     button {
          width: 40px;
          color: var(--tertiary-gray-900);
          background: var(--primary-gray-50);
          border-radius: var(--border-radius);

          .item_content--icons {
               font-size: 20px;
               font-weight: 700;
          }

          &:hover {
               background: var(--primary-gray-200);
          }
     }
`;

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate() + 1;

const NavForm = () => {
     const [startDate, setStartDate] = useState<Date | null>(new Date());
     const [endDate, setEndDate] = useState<Date | null>(
          new Date(`${year} ${month} ${day}`)
     );

     return (
          <StyledForm className='date_parameter'>
               <div className='input_container'>
                    <LiaBedSolid className='item_content--icons' />{' '}
                    <input
                         type='text'
                         defaultValue='Abuja, Nigeria'
                         placeholder='Enter a city, hotel'
                    />
               </div>
               <DatePicker
                    value={startDate}
                    onChange={setStartDate}
                    className='start_picker'
               />
               <DatePicker
                    value={endDate}
                    onChange={setEndDate}
                    className='end_picker'
               />
               <button>
                    <CiSearch className='item_content--icons' />
               </button>
          </StyledForm>
     );
};

export default NavForm;
