import styled from 'styled-components';
import Footer from '../ui/Footer';
import Welcome from '../ui/Welcome';
import { carOfferData } from '../helpers/data';

const StyledCarRental = styled.div`
     display: flex;
     flex-direction: column;
     row-gap: 60px;
     height: 100%;
     padding: 20px 0;
`;

const CarRental = () => {
     return (
          <StyledCarRental>
               <Welcome
                    welcome="Find the stay that's right for you."
                    data={carOfferData}
               />

               <Footer />
          </StyledCarRental>
     );
};

export default CarRental;
