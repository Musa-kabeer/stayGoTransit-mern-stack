import styled from 'styled-components';
import { stayOfferData } from '../helpers/data';

import Footer from '../ui/Footer';
import Welcome from '../ui/Welcome';
import ScrollingContent from '../ui/ScrollingContent';
import Trending from '../ui/Trending';

const StyledHome = styled.div`
     display: flex;
     flex-direction: column;
     row-gap: 60px;
     height: 100%;
     padding: 20px 0;
`;

const Homepage = () => {
     return (
          <StyledHome>
               {/* WELCOME SECTION */}
               <Welcome
                    welcome="Find the stay that's right for you."
                    data={stayOfferData}
               />

               {/* HOTEL SCROLL */}
               <ScrollingContent />

               {/* TRENDING */}
               <Trending />

               {/* FOOTER */}
               <Footer />
          </StyledHome>
     );
};

export default Homepage;
