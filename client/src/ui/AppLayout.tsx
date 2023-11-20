import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { AppWrapper } from './AppWrapper';
import Navbar from './Navbar';
import { MainWrapper } from './MainWrapper';
import AsideWrapper from './AsideWrapper';

const StyledContentOutlets = styled.div`
     overflow-y: scroll;
     width: 100%;
     height: 100%;
`;

const AppLayout: React.FC = () => {
     return (
          <AppWrapper>
               <Navbar />

               <MainWrapper>
                    <AsideWrapper />

                    <StyledContentOutlets>
                         <Outlet />
                    </StyledContentOutlets>
               </MainWrapper>
          </AppWrapper>
     );
};

export default AppLayout;
