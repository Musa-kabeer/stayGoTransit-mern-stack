import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

/**
 * Manual components
 */
import { useAsideContext } from '../helpers/utils';
import Modal from '../context/ModalContext';
import AuthSlider from './AuthSlider';
import Logo from './Logo';
// import NavForm from './NavForm';

const NavWrapper = styled.nav`
     height: 10vh;
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-bottom: 0.5px solid var(--tertiary-blue-950);
     padding: 0 2rem;

     .left_section {
          display: flex;
          align-items: center;
          gap: 10px;
     }

     .left_section--icon {
          font-size: 1.3rem;
          font-weight: 900;
          cursor: pointer;
          width: 35px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: var(--border-radius);
          color: var(--primary-gray-100);

          &:hover {
               background-color: var(--tertiary-blue-800);
          }

          &:focus {
               background-color: var(--tertiary-blue-800);
          }
     }

     .right_section > button {
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 14px;
          font-family: 300;
          cursor: pointer;
          background: none;
          border: 0.5px solid var(--tertiary-blue-950);
          border-radius: var(--border-radius);
          color: var(--primary-gray-300);

          &:hover {
               border: none;
               background: var(--primary-gray-100);
               color: var(--secondary-gray-700);
          }
     }

     .right_section .replace_btn {
          display: none;
     }

     @media screen and (max-width: 1024px) {
          padding: 0 1rem;

          .right_section .btn {
               display: none;
          }

          .right_section .replace_btn {
               display: block;
          }
     }
`;

const Navbar = () => {
     const { changeMode } = useAsideContext();

     function onToggle() {
          changeMode();
     }

     return (
          <NavWrapper>
               <div className='left_section'>
                    <span className='left_section--icon' onClick={onToggle}>
                         <AiOutlineMenu />
                    </span>

                    <Logo />
               </div>

               {/* <NavForm /> */}

               <div className='right_section'>
                    <Modal>
                         <Modal.Button name='authTab'>
                              <button className='btn'>
                                   <FaRegUserCircle className='item_content--icons' />
                                   Sign in
                              </button>
                         </Modal.Button>

                         <Modal.Body windowName='authTab'>
                              <AuthSlider />
                         </Modal.Body>
                    </Modal>

                    <Modal>
                         <Modal.Button name='authTab'>
                              <button className='replace_btn'>
                                   <FaRegUserCircle className='item_content--icons' />
                              </button>
                         </Modal.Button>

                         <Modal.Body windowName='authTab'>
                              <AuthSlider />
                         </Modal.Body>
                    </Modal>
               </div>
          </NavWrapper>
     );
};

export default Navbar;
