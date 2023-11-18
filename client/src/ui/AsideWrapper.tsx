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
     border-right: 1px solid var(--tertiary-blue-950);
     width: ${(props) => (props.$mode ? '75px' : '250px')};

     @media screen and (max-width: 764px) {
          position: absolute;
          bottom: 0;
          top: 0;
          background: var(--tertiary-blue-950);
          left: 0;
          width: 250px;
          transform: ${(props) =>
               props.$mode ? 'translateX(0)' : 'translateX(-900px)'};
     }

     @media screen and (max-width: 640px) {
          width: 100%;
     }

     .aside_container {
          display: flex;
          flex-direction: column;

          .item {
               border-bottom: 0.5px solid var(--tertiary-blue-950);

               @media screen and (max-width: 764px) {
                    border-bottom: 0.5px solid var(--tertiary-blue-800);
               }
          }

          .item_content {
               width: 100%;
               text-decoration: none;
               margin: 10px 0;

               display: flex;
               align-items: center;
               justify-content: ${(props) => (props.$mode ? 'center' : '')};
               gap: 25px;
               color: var(--primary-blue-300);
               padding: 0.5rem;
               border-radius: var(--border-radius);

               &:hover {
                    background-color: var(--primary-blue-50);
                    cursor: pointer;
                    color: var(--tertiary-blue-950);
               }

               @media screen and (max-width: 764px) {
                    justify-content: flex-start;
               }
          }

          .item_content--icons {
               width: 20px;
               height: 20px;
               color: var(--tertiary-blue-950);

               @media screen and (max-width: 764px) {
                    color: var(--tertiary-blue-800);
               }
          }

          h1 {
               font-size: 14px;
               display: ${(props) => (props.$mode ? 'none' : 'block')};
               animation: ${fadeIn} 1.5s ease-in-out;

               @media screen and (max-width: 764px) {
                    display: block;
                    animation: ${fadeIn} 1.5s ease-in-out;
               }
          }

          .active {
               width: 100%;
               text-decoration: none;
               margin: 10px 0;

               display: flex;
               align-items: center;
               gap: 25px;
               color: var(--tertiary-blue-950);
               border-radius: var(--border-radius);
               background-color: var(--primary-blue-50);
          }
     }
`;

const AsideWrapper = () => {
     const { mode } = useAsideContext();

     return (
          <StyledAside $mode={mode}>
               <div className='aside_container'>
                    <div className='item'>
                         <ul className='items__lists'>
                              <li>
                                   <NavLink
                                        to='/stays'
                                        className={({ isActive }) =>
                                             (isActive
                                                  ? 'active'
                                                  : 'inactive') +
                                             ' item_content'
                                        }
                                   >
                                        <LiaBedSolid className='item_content--icons' />{' '}
                                        <h1>Stays</h1>
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to='/car-rental'
                                        className='item_content'
                                   >
                                        <IoCarOutline className='item_content--icons' />
                                        <h1>Car Rentals</h1>
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink
                                        to='/trains-buses'
                                        className='item_content'
                                   >
                                        <PiTrain className='item_content--icons' />
                                        <h1>Trains and Buses</h1>
                                   </NavLink>
                              </li>
                         </ul>
                    </div>

                    <div className='item'>
                         <NavLink to='/explore' className='item_content'>
                              <BiWorld className='item_content--icons' />{' '}
                              <h1>Explore</h1>
                         </NavLink>
                    </div>

                    <div className='item'>
                         <NavLink to='/feedback' className='item_content'>
                              <RiFeedbackLine className='item_content--icons' />{' '}
                              <h1>Feedback</h1>
                         </NavLink>
                    </div>

                    <div className='item'>
                         <NavLink to='/trips' className='item_content'>
                              <AiOutlineHeart className='item_content--icons' />{' '}
                              <h1>Trips</h1>
                         </NavLink>
                    </div>
               </div>
          </StyledAside>
     );
};

export default AsideWrapper;
