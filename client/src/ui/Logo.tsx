import { styled } from 'styled-components';

const StyledLogo = styled.h1`
     font-size: 1.2rem;
     font-weight: 800;
     text-transform: uppercase;

     .stay {
          background: linear-gradient(
               45deg,
               var(--primary-blue-300),
               var(--secondary-blue-600)
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
               var(--primary-blue-300),
               var(--secondary-blue-600)
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
               var(--primary-blue-300),
               var(--secondary-blue-600)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -moz-background-clip: text;
          -webkit-background-clip: text;
          color: #00000033;
     }

     @media screen and (max-width: 1024px) {
          display: none;
     }
`;

const StyledSmallLogo = styled.span`
     display: none;

     @media screen and (max-width: 1024px) {
          display: block;

          .logo {
               width: 25px;
               height: 25px;
          }
     }
`;

const Logo = () => {
     return (
          <>
               <StyledLogo>
                    <span className='stay'>Stay</span>
                    <span className='go'>Go</span>
                    <span className='transit'>Transit</span>
               </StyledLogo>

               <StyledSmallLogo>
                    <img
                         src='/android-chrome-512x512.png'
                         alt='LOGO'
                         className='logo'
                    />
               </StyledSmallLogo>
          </>
     );
};

export default Logo;
