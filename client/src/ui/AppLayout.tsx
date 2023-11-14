import { Outlet, NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { LiaBedSolid } from 'react-icons/lia';
import { IoCarOutline } from 'react-icons/io5';
import { PiTrain } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { RiFeedbackLine } from 'react-icons/ri';

import { AppWrapper } from './AppWrapper';
import Navbar from './Navbar';
import { MainWrapper } from './MainWrapper';
import { AsideWrapper } from './AsideWrapper';
// import Modal from '../context/ModalContext';

const AppLayout: React.FC = () => {
     return (
          <AppWrapper>
               <Navbar />

               <MainWrapper>
                    <AsideWrapper>
                         {/* <Modal>
                              <Modal.Button name='authTab'>
                                   <div className='item'>
                                        <NavLink
                                             to='/'
                                             className='item_content'
                                        >
                                             <FaRegUserCircle className='item_content--icons' />{' '}
                                             <span>Sign in</span>
                                        </NavLink>
                                   </div>
                              </Modal.Button>
                         </Modal> */}

                         <div className='item'>
                              <ul className='items__lists'>
                                   <li>
                                        <NavLink
                                             to='/'
                                             className='item_content'
                                        >
                                             <LiaBedSolid className='item_content--icons' />{' '}
                                             <span>Stays</span>
                                        </NavLink>
                                   </li>

                                   <li>
                                        <NavLink
                                             to='/'
                                             className='item_content'
                                        >
                                             <IoCarOutline className='item_content--icons' />
                                             <span>Car Rentals</span>
                                        </NavLink>
                                   </li>

                                   <li>
                                        <NavLink
                                             to='/'
                                             className='item_content'
                                        >
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
                    </AsideWrapper>

                    <div>
                         <Outlet />
                    </div>
               </MainWrapper>
          </AppWrapper>
     );
};

export default AppLayout;
