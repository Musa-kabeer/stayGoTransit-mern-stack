import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const StyledReviewContent = styled.div`
     margin: 1rem 0;
     overflow-y: scroll;
     height: 75vh;

     .reviews {
          display: flex;
          flex-direction: column;
          gap: 20px;
     }
`;

const ReviewsContent = () => {
     return (
          <StyledReviewContent>
               <ul className='reviews'>
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
               </ul>
          </StyledReviewContent>
     );
};

export default ReviewsContent;
