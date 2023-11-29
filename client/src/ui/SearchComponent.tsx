import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LiaBedSolid } from 'react-icons/lia';
import { IoCarOutline } from 'react-icons/io5';
import { PiTrain } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';

interface IState {
     $state: boolean;
}

const StyledSearch = styled.form<IState>`
     width: 80%;
     display: flex;
     align-items: center;
     column-gap: 10px;

     .form_group {
          width: 100%;
          display: flex;
          align-items: center;
          column-gap: 2px;
          padding: 6px;
          background-color: ${(props) =>
               props.$state
                    ? 'var(--primary-gray-200)'
                    : 'var(--primary-gray-50)'};
          border-radius: 6px;

          .form_group-icon {
               font-size: 20px;
               margin: 0 10px;
          }

          span {
               width: 1px;
               background-color: var(--primary-gray-300);
               height: 17px;
          }

          input {
               width: 100%;
               height: 30px;
               outline: none;
               border: none;
               background: none;
               padding: 0 10px;
          }
     }

     button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8.5px 16px;
          border-radius: var(--border-radius);
          background-color: var(--tertiary-blue-800);
          color: var(--primary-gray-300);
          font-size: 25px;
          cursor: pointer;
     }
`;

const SearchComponent = () => {
     const [state, setState] = useState<boolean>(false);
     const { pathname } = useLocation();

     function handleClick() {
          setState(true);
     }

     function handleBlur() {
          setState(false);
     }

     return (
          <StyledSearch $state={state}>
               <div
                    className='form_group'
                    onClick={handleClick}
                    onBlur={handleBlur}
               >
                    {pathname === '/stays' && (
                         <LiaBedSolid className='form_group-icon' />
                    )}

                    {pathname === '/car-rental' && (
                         <IoCarOutline className='form_group-icon' />
                    )}

                    {pathname === '/trains-buses' && (
                         <PiTrain className='form_group-icon' />
                    )}

                    <span></span>
                    <input
                         type='text'
                         placeholder={
                              pathname === '/stays'
                                   ? 'Enter name of hotel or country you wanted!'
                                   : ''
                         }
                    />
               </div>

               <button>
                    <CiSearch />
               </button>
          </StyledSearch>
     );
};

export default SearchComponent;
