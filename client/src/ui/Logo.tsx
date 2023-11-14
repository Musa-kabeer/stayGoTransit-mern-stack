import { styled } from 'styled-components';

const StyledLogo = styled.h1`
     font-size: 1.2rem;
     font-weight: 800;
     text-transform: uppercase;

     .stay {
          background: linear-gradient(
               45deg,
               var(--secondary-blue-400),
               var(--tertiary-blue-800)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -moz-background-clip: text;
          -webkit-background-clip: text;
          color: #00000033;
     }

     .go {
          background: linear-gradient(
               45deg,
               var(--secondary-blue-400),
               var(--tertiary-blue-800)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -moz-background-clip: text;
          -webkit-background-clip: text;
          color: #00000033;
     }

     .transit {
          background: linear-gradient(
               45deg,
               var(--secondary-blue-400),
               var(--tertiary-blue-800)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -moz-background-clip: text;
          -webkit-background-clip: text;
          color: #00000033;
     }
`;

const Logo = () => {
     return (
          <StyledLogo>
               <span className='stay'>Stay</span>
               <span className='go'>Go</span>
               <span className='transit'>Transit</span>
          </StyledLogo>
     );
};

export default Logo;
