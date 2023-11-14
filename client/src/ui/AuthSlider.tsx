import { Link } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useOutSideclick } from '../hooks/useOutSideclick';

const Overlay = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     backdrop-filter: blur(1px);
     z-index: 1000;
     transition: all 0.5s;

     display: flex;
     justify-content: center;
     align-items: center;
`;

const Slider = styled.div`
     width: 500px;
     height: 75vh;
     background-color: var(--primary-gray-100);
     border-radius: var(--border-radius);

     display: flex;
     flex-direction: column;
     justify-content: space-between;

     padding: 30px 17px;

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
          }

          p {
               font-size: var(--small-text);
               line-height: 1.2rem;
               letter-spacing: var(--letter-spacing);
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
          }
     }

     .divide {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--secondary-gray-500);
          font-size: 15px;

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

               &:hover {
                    background: var(--primary-gray-300);
               }
          }
     }

     footer {
          font-size: 11px;
          color: var(--secondary-gray-500);
          letter-spacing: 1px;

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

                         <img src='/auth-slider-image.jpeg' alt='Night Image' />

                         <div className='auth-1'>
                              <h1>Sign in or create an account</h1>
                              <p>
                                   Track prices, organize travel plans and
                                   access member-only deals with your
                                   staygotransit account.
                              </p>
                              <button>Continue with email</button>
                         </div>

                         <div className='divide'>
                              <div className='line'></div>
                              <span>or</span>
                              <div className='line'></div>
                         </div>

                         <div className='auth-2'>
                              <button>Continue with google</button>
                              <button>Continue with facebook</button>
                         </div>

                         <footer>
                              By signing up you accept our{' '}
                              <Link className='link' to='/'>
                                   terms of use
                              </Link>{' '}
                              and{' '}
                              <Link className='link' to='/'>
                                   privacy policy
                              </Link>
                              .
                         </footer>
                    </Slider>
               </motion.div>
          </Overlay>
     );
};

export default AuthSlider;
