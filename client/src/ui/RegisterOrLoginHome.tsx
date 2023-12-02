import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';

interface RegisterAndLoginProp {
     onClick?: () => void;
}

const StyledWrapper = styled.div`
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     height: 100%;

     @media screen and (max-width: 560px) {
          width: 100%;
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
          gap: 10px;
          padding: 10px 0;

          h1 {
               font-size: var(--large-text);
               font-size: 17px;
               color: var(--tertiary-gray-900);
               font-weight: 600;
          }

          p {
               font-size: var(--small-text);
               line-height: 1.2rem;

               @media screen and (max-width: 764px) {
                    line-height: 1rem;
               }
          }

          button {
               border-radius: var(--border-radius);
               padding: 10px 0;
               border: 1.5px solid var(--primary-gray-300);
               cursor: pointer;

               &:hover {
                    background: var(--primary-gray-300);
               }
          }
     }

     .divide {
          display: flex;
          align-items: center;
          gap: 3px;
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
          padding: 10px 0;

          button {
               width: 100%;
               border: 1.5px solid var(--primary-gray-300);
               padding: 10px;
               border-radius: var(--border-radius);
               cursor: pointer;

               &:hover {
                    background: var(--primary-gray-300);
               }
          }
     }

     footer {
          color: var(--secondary-gray-500);
          letter-spacing: 1px;
          line-height: 18px;
          font-size: 11px;

          .link {
               color: var(--secondary-gray-500);
               text-decoration: underline;
          }
     }
`;

const RegisterOrLoginHome: React.FC<RegisterAndLoginProp> = () => {
     const { setCurrentPage } = useAuthContext();

     // continue with email
     const onClick = () => {
          setCurrentPage('sign-in');
     };

     return (
          <StyledWrapper>
               <img src='/auth-slider-image.jpeg' alt='Night Image' />

               <div className='auth-1'>
                    <h1>Sign in or create an account</h1>
                    <p>
                         Track prices, organize travel plans and access
                         member-only deals with your staygotransit account.
                    </p>
                    <button onClick={onClick}>Continue with email</button>
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
          </StyledWrapper>
     );
};

export default RegisterOrLoginHome;
