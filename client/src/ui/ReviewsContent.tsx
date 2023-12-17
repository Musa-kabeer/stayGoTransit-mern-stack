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
                    <ReviewItem
                         name='commandcodes'
                         date='2 weeks ago'
                         stars={4}
                         content='Lorem ipsum dolor sit amet consectetur, adipisicing
                         elit. Architecto suscipit officia labore debitis iste
                         dolorem quis doloremque voluptatibus. Lorem ipsum dolor
                         sit amet, consectetur adipisicing elit. Quibusdam
                         doloremque, corrupti molestias ratione facilis impedit
                         necessitatibus. At sapiente quae vero.'
                    />
               </ul>
          </StyledReviewContent>
     );
};

export default ReviewsContent;
