import styled from 'styled-components';

const StyledBooking = styled.div`
     background: #fff;
     height: 100%;
     padding: 2rem 10rem 0 10rem;

     display: flex;
     flex-direction: column;
     gap: 30px;

     .booking_header {
          display: flex;
          justify-content: space-between;
          padding: 1.5rem 0;

          .left_content {
               h1 {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 18px;
                    font-weight: 700;

                    color: var(--tertiary-gray-800);
               }

               p {
                    width: 50%;
               }
          }

          .price {
               font-size: 25px;
               font-weight: 500;
          }

          /* button {
               padding: 1rem;
               background: var(--tertiary-blue-800);
               color: var(--primary-gray-200);
               border-radius: 3px;
               transition: all 0.3s ease-in-out;

               &:hover {
                    background: var(--tertiary-blue-950);
               }
          } */
     }

     .images {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          justify-content: center;
          align-items: center;
          gap: 5px;

          img:nth-child(1),
          img:nth-child(2) {
               grid-column: span 2;
          }

          img {
               width: 100%;
               height: 100%;
               object-fit: cover;
               cursor: pointer;
          }
     }
`;

export default StyledBooking;
