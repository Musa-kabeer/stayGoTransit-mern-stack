import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegisterAndLoginButton from './RegisterAndLoginButton';

interface AccountConsentProps {
     onClick?: () => void;
}

const StyledSignupForm = styled.div`
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     row-gap: 15px;

     img {
          align-self: center;
          object-fit: cover;
     }

     h1 {
          font-size: var(--large-text);
          font-weight: 600;
     }

     p {
          font-size: var(--extra-small-text);
     }
`;

const CreateEmailAccountConsent: React.FC<AccountConsentProps> = ({
     onClick,
}) => {
     return (
          <StyledSignupForm>
               <img
                    src='/signup.png'
                    alt='Create an Account'
                    style={{
                         width: '90px',
                         height: '90px',
                    }}
               />
               <h1>Let's get you set up.</h1>
               <p>
                    We'll create an account for{' '}
                    <strong>musaabdulkabeer19@gmail.com</strong>
               </p>
               <RegisterAndLoginButton onClick={onClick}>
                    Create your account
               </RegisterAndLoginButton>
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
          </StyledSignupForm>
     );
};

export default CreateEmailAccountConsent;
