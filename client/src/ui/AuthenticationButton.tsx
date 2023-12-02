import styled from 'styled-components';

const RegisterAndLoginButton = styled.button`
     width: 100%;
     height: 50px;
     font-size: 14px;
     color: var(--primary-gray-300);
     background: linear-gradient(
          to left,
          var(--secondary-blue-700),
          var(--tertiary-blue-950)
     );
     border-radius: var(--border-radius);
     cursor: pointer;
     letter-spacing: var(--letter-spacing);
     margin-top: 1rem;

     &:hover {
          background: linear-gradient(
               to left,
               var(--secondary-blue-600),
               var(--tertiary-blue-900)
          );
          border-radius: var(--border-radius);
     }
`;

export default RegisterAndLoginButton;
