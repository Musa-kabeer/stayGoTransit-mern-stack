import { LiaTimesSolid } from 'react-icons/lia';
import { FaAngleLeft } from 'react-icons/fa6';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from './Logo';
import { useOutSideclick } from '../hooks/useOutSideclick';
import { useState } from 'react';
import ContinueWithEmail from './ContinueWithEmail';
import CreateEmailAccountConsent from './CreateEmailAccountConsent';
import RegisterAndLogin from './RegisterAndLogin';
import OTPConfirmation from './OTPConfirmation';

const Overlay = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     backdrop-filter: blur(1px);
     z-index: 1000;
     transition: all 0.5s;
`;

const Slider = styled.div`
     width: 50%;
     background-color: var(--primary-gray-100);
     border-radius: var(--border-radius);
     height: 75vh;
     margin: 0 auto;
     margin-top: 100px;

     display: flex;
     flex-direction: column;
     gap: 25px;
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

     img {
          width: 100%;
          height: 200px;
          border-radius: var(--border-radius);
          object-fit: cover;
     }

     .auth-1 {
          display: flex;
          flex-direction: column;
          gap: 18px;

          h1 {
               font-size: var(--large-text);
               font-weight: 600;

               @media screen and (max-width: 764px) {
                    font-size: var(--small-text);
               }
          }

          p {
               font-size: var(--small-text);
               line-height: 1.2rem;

               @media screen and (max-width: 764px) {
                    font-size: var(--extra-small-text);
                    line-height: 1rem;
               }
          }

          button {
               border-radius: var(--border-radius);
               padding: 10px 0;
               border: 1.5px solid var(--primary-gray-300);
               font-size: var(--small-text);
               cursor: pointer;

               &:hover {
                    background: var(--primary-gray-300);
               }

               @media screen and (max-width: 1024px) {
                    font-size: 12px;
               }
          }
     }

     .divide {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--secondary-gray-500);
          font-size: var(--small-text);

          .line {
               background: var(--primary-gray-300);
               width: 100%;
               height: 1px;
          }
     }

     .auth-2 {
          display: flex;
          justify-content: space-between;
          gap: 10px;

          button {
               width: 100%;
               border: 1.5px solid var(--primary-gray-300);
               font-size: 15px;
               padding: 10px;
               border-radius: var(--border-radius);
               cursor: pointer;

               &:hover {
                    background: var(--primary-gray-300);
               }

               @media screen and (max-width: 1024px) {
                    font-size: 12px;
               }
          }
     }

     footer {
          font-size: var(--extra-small-text);
          color: var(--secondary-gray-500);
          letter-spacing: 1px;
          line-height: 18px;

          @media screen and (max-width: 764px) {
               font-size: 10px;
          }

          .link {
               color: var(--secondary-gray-500);
               text-decoration: underline;
          }
     }
`;

interface SliderProps {
     onCloseTab?: () => void;
}

const AuthSlider: React.FC<SliderProps> = ({ onCloseTab }) => {
     const clickRef = useOutSideclick({ handler: () => onCloseTab?.() });
     const [current, setCurrent] = useState<number>(1);

     function handleContinueWithEmail() {
          setCurrent((current) => current + 1);
     }

     function handleContinueToConsent() {
          setCurrent((current) => current + 1);
     }

     function handleContinueToOTPConfirmation() {
          setCurrent((current) => current + 1);
     }

     return (
          <Overlay ref={clickRef} data-overlay='true'>
               <motion.div
                    initial={{ opacity: 0, y: 900 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
               >
                    <Slider>
                         <nav>
                              {current !== 1 ? (
                                   <button
                                        onClick={() =>
                                             setCurrent(
                                                  (current) => current - 1
                                             )
                                        }
                                        style={{
                                             display: 'flex',
                                             alignItems: 'center',
                                             cursor: 'pointer',
                                             gap: '2px',
                                             color: 'var(--secondary-gray-600)',
                                        }}
                                   >
                                        <FaAngleLeft /> Back
                                   </button>
                              ) : (
                                   <Logo />
                              )}

                              <span onClick={() => onCloseTab?.()}>
                                   <LiaTimesSolid />
                              </span>
                         </nav>

                         {current === 1 ? (
                              <RegisterAndLogin
                                   onClick={handleContinueWithEmail}
                              />
                         ) : current === 2 ? (
                              <ContinueWithEmail
                                   onClick={handleContinueToConsent}
                              />
                         ) : current === 3 ? (
                              <CreateEmailAccountConsent
                                   onClick={handleContinueToOTPConfirmation}
                              />
                         ) : (
                              <OTPConfirmation />
                         )}
                    </Slider>
               </motion.div>
          </Overlay>
     );
};

export default AuthSlider;
