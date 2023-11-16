import { styled } from 'styled-components';
import RegisterAndLoginButton from './RegisterAndLoginButton';

interface LoginFormProps {
     onClick?: () => void;
}

const StyledLoginForm = styled.div`
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

     button {
     }
`;

const ContinueWithEmail: React.FC<LoginFormProps> = ({ onClick }) => {
     return (
          <StyledLoginForm>
               <h1>What's your email address?</h1>
               <input type='email' placeholder='Email address' /> <br />
               <RegisterAndLoginButton onClick={onClick}>
                    Continue
               </RegisterAndLoginButton>
          </StyledLoginForm>
     );
};

export default ContinueWithEmail;
