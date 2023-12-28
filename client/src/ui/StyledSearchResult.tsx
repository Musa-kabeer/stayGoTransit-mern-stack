import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledResult = styled(Link)`
     width: 100%;
     border-radius: 8px;
     background: var(--primary-gray-200);
     color: var(--tertiary-gray-900);
     padding: 1rem;

     display: flex;
     justify-content: space-between;
     gap: 10px;

     .left_result {
          flex: 5;
          border-right: 1px solid var(--primary-gray-300);
          display: flex;
          gap: 10px;

          .image_container {
               flex: 1;
               position: relative;

               img {
                    width: 100%;
                    border-radius: 4px;
               }

               div {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #0000008e;
                    color: #fff;
                    font-size: 30px;
                    padding: 3px 8px;
                    border-radius: 6px;
                    cursor: pointer;

                    &:hover {
                         background: #000000f0;
                    }
               }
          }

          .content {
               flex: 2;
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               padding: 10px 0;

               &_top {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    a {
                         font-size: 1.2rem;
                         font-weight: 700;
                         color: var(--tertiary-gray-900);
                         text-decoration: none;

                         font-size: 2rem;
                         font-weight: 500;
                         line-height: 30px;

                         &:hover {
                              text-decoration: underline;
                         }
                    }

                    .provision {
                         font-size: 12px;
                    }
               }

               &_bottom {
                    display: flex;
                    gap: 6px;
               }
          }
     }

     .right_result {
          flex: 1;
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          gap: 10px;

          h2 {
               font-size: 1.7rem;
               font-weight: 700;
          }

          button {
               background: linear-gradient(
                    to left,
                    var(--tertiary-blue-800),
                    var(--tertiary-blue-950)
               );
               color: var(--primary-blue-200);
               padding: 10px 20px;
               border-radius: 4px;

               &:hover {
                    background: linear-gradient(
                         to left,
                         var(--tertiary-blue-950),
                         var(--tertiary-blue-800)
                    );
               }
          }
     }
`;

export default StyledResult;
