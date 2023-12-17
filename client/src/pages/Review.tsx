import styled from 'styled-components';
import ReviewHeader from '../ui/ReviewHeader';
import ReviewsContent from '../ui/ReviewsContent';

const StyledReview = styled.div`
     height: 100vh;
     padding: 2rem 20rem;
     background: #ffff;
`;

const Review = () => {
     return (
          <StyledReview>
               <ReviewHeader />
               <ReviewsContent />
          </StyledReview>
     );
};

export default Review;
