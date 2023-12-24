import styled from 'styled-components';
import { sliderData, stayOfferData } from '../helpers/data';

import Footer from '../ui/Footer';
import Welcome from '../ui/Welcome';
import SliderComponent from '../ui/SliderComponent';
import Trending from '../features/hotel/Trending';

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
               <SliderComponent
                    header='Best hotels in Nigeria'
                    data={sliderData}
               />

               {/* TRENDING */}
               <Trending
                    header='Trending hotels in Nigeria'
                    paragraph='The most searched for hotel destinations on staygotransit'
               />

               {/* FOOTER */}
               <Footer />
          </StyledHome>
     );
};

export default Homepage;
