import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface RegisterAndLoginProp {
     onClick?: () => void;
}

const StyledWrapper = styled.div`
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     height: 60vh;
`;

const RegisterAndLogin: React.FC<RegisterAndLoginProp> = ({ onClick }) => {
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

export default RegisterAndLogin;
