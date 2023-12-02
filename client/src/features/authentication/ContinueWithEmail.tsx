import { styled } from 'styled-components';
import AuthenticationButton from '../../ui/AuthenticationButton';
import { useEffect, useState } from 'react';
import { useContinueWithEmail } from './useContinueWithEmail';

interface LoginFormProps {
     onClick?: () => void;
}

const StyledLoginForm = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;

     h1 {
          font-size: var(--small-text);
          font-weight: 600;
     }

     input {
          margin-top: 2rem;
          border: 1px solid var(--primary-gray-300);
          width: 100%;
          padding: 10px;
          background: none;
          transition: all ease-in-out 0.5s;
          outline: none;
          border-radius: var(--border-radius);
          color: var(--secondary-gray-700);

          &:focus {
               box-shadow: var(--shadow-3);
          }
     }

     small {
          font-size: 11px;
          color: red;
          margin-left: 5px;
          margin-top: -2px;
     }
`;

const ContinueWithEmail: React.FC<LoginFormProps> = () => {
     const [inValid, setInValid] = useState<boolean>(false);
     const [email, setEmail] = useState<string>('');
     const { status, continueWithEmail } = useContinueWithEmail();

     useEffect(() => {
          if (email.length > 0) {
               setInValid(false);
          }
     }, [email]);

     const onClick = () => {
          // no email return! 😩
          if (!email) return setInValid(true);

          continueWithEmail({ email });
     };

     return (
          <StyledLoginForm>
               <h1>What's your email address?</h1>
               <input
                    type='email'
                    placeholder='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
               />{' '}
               <br />
               {inValid && <small>Email is required! 😡</small>}
               <AuthenticationButton onClick={onClick}>
                    {status === 'pending' ? 'Loading...' : 'Continue'}
               </AuthenticationButton>
          </StyledLoginForm>
     );
};

export default ContinueWithEmail;
