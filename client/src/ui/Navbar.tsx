import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

const NavWrapper = styled.nav`
     height: 10vh;
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-bottom: 0.5px solid var(--tertiary-blue-900);
     padding: 0 2rem;

     .left_section {
          display: flex;
          align-items: center;
          gap: 10px;
     }

     .left_section--icon {
          font-size: 1.3rem;
          font-weight: 900;
          cursor: pointer;
          width: 35px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: var(--border-radius);

          &:hover {
               background-color: var(--tertiary-blue-900);
          }

          &:focus {
               background-color: var(--tertiary-blue-900);
          }
     }

     h1 {
          font-size: 1.2rem;
          font-weight: 800;
          text-transform: uppercase;
     }

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
          color: rgba(0, 0, 0, 0.2);
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
          color: rgba(0, 0, 0, 0.2);
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
          color: rgba(0, 0, 0, 0.2);
     }

     .right_section > button {
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 14px;
          font-family: 300;
          cursor: pointer;
          background: none;
          border: 0.5px solid var(--tertiary-blue-900);
          border-radius: var(--border-radius);
          color: var(--secondary-blue-600);

          &:hover {
               border: none;
               background: var(--primary-gray-100);
               color: var(--secondary-gray-700);
          }
     }
`;

const Navbar = () => {
     return (
          <NavWrapper>
               <div className='left_section'>
                    <span className='left_section--icon'>
                         <AiOutlineMenu />
                    </span>

                    <h1>
                         <span className='stay'>Stay</span>
                         <span className='go'>Go</span>
                         <span className='transit'>Transit</span>
                    </h1>
               </div>

               <div className='right_section'>
                    <button>
                         <FaRegUserCircle className='item_content--icons' />
                         Sign in
                    </button>
               </div>
          </NavWrapper>
     );
};

export default Navbar;
