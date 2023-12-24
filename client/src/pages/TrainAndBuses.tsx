import styled from 'styled-components';
import Footer from '../ui/Footer';
import Welcome from '../ui/Welcome';
import { carOfferData, sliderData } from '../helpers/data';
import SliderComponent from '../ui/SliderComponent';
import Trending from '../features/trains/TrendingTrain';

const StyledTrainAndBuses = styled.div`
     display: flex;
     flex-direction: column;
     row-gap: 60px;
     height: 100%;
     padding: 20px 0;
`;

const TrainAndBuses = () => {
     return (
          <StyledTrainAndBuses>
               <Welcome
                    welcome="Find the stay that's right for you."
                    data={carOfferData}
               />

               <SliderComponent
                    header='Best hotels in Nigeria'
                    data={sliderData}
               />

               {/* TRENDING */}
               <Trending
                    header='Trending States'
                    paragraph='The most searched states on staygotransit'
               />

               <Footer />
          </StyledTrainAndBuses>
     );
};

export default TrainAndBuses;
