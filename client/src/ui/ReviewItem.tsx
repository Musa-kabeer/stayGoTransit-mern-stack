import { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

interface IReview {
     name: string;
     date: string;
     stars: number;
     content: string;
}

const StyledReview = styled.div`
     display: flex;
     gap: 15px;
     background: #e0e0e090;
     padding: 2rem;
     border-radius: 10px;

     .user_name {
          .content {
               background-color: green;
               padding: 1.5rem;
               border-radius: 50%;
               font-size: 2.5rem;
          }
     }

     .content {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .user_ratings {
               h2 {
                    font-size: 19px;
                    font-weight: 500;
               }

               .user_stars {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                    span {
                         font-size: 13px;
                    }

                    .star_container {
                         display: flex;
                         gap: 5px;

                         svg {
                              color: orange;
                         }
                    }
               }
          }

          .user_review {
               font-size: 1.3rem;
               line-height: 2rem;
          }
     }
`;

const ReviewItem: FC<IReview> = ({ name, date, stars, content }) => {
     return (
          <StyledReview>
               <div className='user_name'>
                    <div className='content'>M</div>
               </div>

               <div className='content'>
                    <div className='user_ratings'>
                         <h2>{name}</h2>

                         <div className='user_stars'>
                              <span>{date}</span>

                              <div className='star_container'>
                                   {Array.from(
                                        { length: stars },
                                        (_, i) => i + 1
                                   ).map((_, i) => (
                                        <FaStar key={i + 1} />
                                   ))}
                              </div>
                         </div>
                    </div>

                    <div className='user_review'>{content}</div>
               </div>
          </StyledReview>
     );
};

export default ReviewItem;
