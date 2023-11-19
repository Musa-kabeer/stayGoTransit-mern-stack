import styled from 'styled-components';
import Header from '../ui/Header';
import NavForm from '../ui/NavForm';
import OfferBox from '../ui/OfferBox';

const StyledHome = styled.div`
     display: flex;
     flex-direction: column;
     row-gap: 60px;

     .stay_search {
          display: flex;
          flex-direction: column;
          row-gap: 30px;
     }

     .offers {
          display: flex;
          flex-direction: column;
          row-gap: 30px;

          h3 {
               font-size: 20px;
          }

          .offer_grid {
               display: grid;
               column-gap: 20px;
               grid-template-columns: repeat(4, minmax(0, 1fr));
          }
     }
`;

const Homepage = () => {
     return (
          <StyledHome>
               {/* SEARCH SECTION */}
               <div className='stay_search'>
                    <Header>Find the stay that's right for you.</Header>

                    <NavForm />
               </div>

               <div className='offers'>
                    <h3>What we(staygotransit) offers.</h3>

                    <div className='offer_grid'>
                         <OfferBox
                              header='Best deals on hotels'
                              icon='/deal.png'
                         >
                              See deals from 3M+ hotels and accommodations in
                              one place.
                         </OfferBox>

                         <OfferBox
                              header='Free cancellation'
                              icon='/cancellation.png'
                         >
                              Use our filter to find stays with free
                              cancellation.
                         </OfferBox>

                         <OfferBox
                              header='Millions of reviews'
                              icon='/reviews.png'
                         >
                              Check ratings based on millions of real guest
                              reviews.
                         </OfferBox>

                         <OfferBox
                              header='Stays for every need'
                              icon='/home.png'
                         >
                              Find your ideal stay from our many property types.
                         </OfferBox>
                    </div>
               </div>

               <div>
                    <Header>Best hotels in Nigeria</Header>
               </div>
          </StyledHome>
     );
};

export default Homepage;
