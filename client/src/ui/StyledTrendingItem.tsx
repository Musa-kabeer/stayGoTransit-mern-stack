import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledTrending = styled(Link)`
     display: flex;
     background: var(--primary-gray-100);
     height: 110px;
     border-radius: var(--border-radius);
     text-decoration: none;

     &:hover {
          text-decoration: underline;
     }

     .image_encapsulation {
          width: 50%;
     }

     img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          width: 100%;
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
     }

     .content {
          padding: 10px;
          width: 50%;

          .header {
               font-size: 0.8rem;
               text-align: left;
               line-height: 23px;
               color: black;
               text-transform: uppercase;
          }

          span {
               font-weight: 200;
          }
     }
`;

export default StyledTrending;
