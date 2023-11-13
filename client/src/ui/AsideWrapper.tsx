import styled from 'styled-components';

export const AsideWrapper = styled.aside`
     padding: 0 10px;
     display: flex;
     flex-direction: column;
     border-right: 1px solid var(--tertiary-blue-900);
     width: 250px;

     .item {
          border-bottom: 0.5px solid var(--tertiary-blue-900);
     }

     .item_content {
          width: 100%;
          text-decoration: none;
          margin: 10px 0;

          display: flex;
          align-items: center;
          gap: 25px;
          color: var(--secondary-blue-400);
          padding: 1rem;
          border-radius: var(--border-radius);

          &:hover {
               background-color: var(--primary-blue-50);
               cursor: pointer;
               color: var(--tertiary-blue-950);
          }
     }

     .item_content--icons {
          width: 22px;
          height: 22px;
          font-weight: 200;
          color: var(--tertiary-blue-800);
     }

     span {
          font-size: 14px;
     }
`;
