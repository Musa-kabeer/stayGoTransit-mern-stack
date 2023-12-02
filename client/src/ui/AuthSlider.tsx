import { LiaTimesSolid } from 'react-icons/lia';
// import { FaAngleLeft } from 'react-icons/fa6';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from './Logo';
import { useOutSideclick } from '../hooks/useOutSideclick';
import ContinueWithEmail from '../features/authentication/ContinueWithEmail';
import CreateEmailAccountConsent from '../features/authentication/CreateEmailAccountConsent';
import RegisterOrLoginHome from './RegisterOrLoginHome';
import OTPConfirmation from '../features/authentication/OTPConfirmation';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

const Overlay = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     backdrop-filter: blur(1px);
     z-index: 2000;
     transition: all 0.5s;
`;

const Slider = styled.div`
     width: 40%;
     background-color: var(--primary-gray-100);
     border-radius: var(--border-radius);
     height: 100%;
     margin: 0 auto;
     margin-top: 140px;

     display: flex;
     flex-direction: column;
     gap: 15px;
     padding: 30px 17px;

     @media screen and (max-width: 1024px) {
          height: 70vh;
          width: 60%;
          gap: 20px;
          padding: 20px 17px;
     }

     @media screen and (max-width: 764px) {
          gap: 10px;
     }

     @media screen and (max-width: 560px) {
          width: 95%;
     }

     nav {
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
               cursor: pointer;
               font-size: 20px;
               font-weight: 600;
          }
     }
`;

interface SliderProps {
     onCloseTab?: () => void;
}

const AuthSlider: React.FC<SliderProps> = ({ onCloseTab }) => {
     const clickRef = useOutSideclick({ handler: () => onCloseTab?.() });
     const { currentPage } = useContext(AuthContext)!;

     return (
          <Overlay ref={clickRef} data-overlay='true'>
               <motion.div
                    initial={{ opacity: 0, y: 900 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
               >
                    <Slider>
                         <nav>
                              <Logo />

                              <span onClick={() => onCloseTab?.()}>
                                   <LiaTimesSolid />
                              </span>
                         </nav>

                         {currentPage === 'sign-in' ? (
                              <ContinueWithEmail />
                         ) : currentPage === 'consent-screen' ? (
                              <CreateEmailAccountConsent />
                         ) : currentPage === 'verify-otp' ? (
                              <OTPConfirmation />
                         ) : (
                              <RegisterOrLoginHome />
                         )}
                    </Slider>
               </motion.div>
          </Overlay>
     );
};

export default AuthSlider;
