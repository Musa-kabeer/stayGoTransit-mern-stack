import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LiaBedSolid } from 'react-icons/lia';
import { IoCarOutline } from 'react-icons/io5';
import { PiTrain } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { RiFeedbackLine } from 'react-icons/ri';
import { useAsideContext } from '../helpers/utils';

interface StyledAsideProps {
     $mode?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledAside = styled.aside<StyledAsideProps>`
     padding: 0 10px;
     display: flex;
     flex-direction: column;
     border-right: 1px solid var(--tertiary-blue-900);
     width: ${(props) => (props.$mode ? '75px' : '250px')};

     .item {
          border-bottom: 0.5px solid var(--tertiary-blue-900);
     }

     .item_content {
          width: 100%;
          text-decoration: none;
          margin: 10px 0;

          display: flex;
          align-items: center;
          gap: 25px;
          color: var(--secondary-blue-400);
          padding: 1rem;
          border-radius: var(--border-radius);

          &:hover {
               background-color: var(--primary-blue-50);
               cursor: pointer;
               color: var(--tertiary-blue-950);
          }
     }

     .item_content--icons {
          width: 22px;
          height: 22px;
          font-weight: 200;
          color: var(--tertiary-blue-800);
     }

     span {
          font-size: 14px;
          display: ${(props) => (props.$mode ? 'none' : 'flex')};
          animation: ${fadeIn} 1.5s ease-in-out;
     }
`;

const AsideWrapper = () => {
     const { mode } = useAsideContext();

     return (
          <StyledAside $mode={mode}>
               <div className='item'>
                    <ul className='items__lists'>
                         <li>
                              <NavLink to='/' className='item_content'>
                                   <LiaBedSolid className='item_content--icons' />{' '}
                                   <span>Stays</span>
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to='/' className='item_content'>
                                   <IoCarOutline className='item_content--icons' />
                                   <span>Car Rentals</span>
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to='/' className='item_content'>
                                   <PiTrain className='item_content--icons' />
                                   <span>Trains and Buses</span>
                              </NavLink>
                         </li>
                    </ul>
               </div>

               <div className='item'>
                    <NavLink to='/' className='item_content'>
                         <BiWorld className='item_content--icons' />{' '}
                         <span>Explore</span>
                    </NavLink>
               </div>

               <div className='item'>
                    <NavLink to='/' className='item_content'>
                         <RiFeedbackLine className='item_content--icons' />{' '}
                         <span>Feedback</span>
                    </NavLink>
               </div>

               <div className='item'>
                    <NavLink to='/' className='item_content'>
                         <AiOutlineHeart className='item_content--icons' />{' '}
                         <span>Trips</span>
                    </NavLink>
               </div>
          </StyledAside>
     );
};

export default AsideWrapper;
