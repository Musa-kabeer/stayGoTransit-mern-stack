import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { AppWrapper } from './AppWrapper';
import Navbar from './Navbar';
import { MainWrapper } from './MainWrapper';
import AsideWrapper from './AsideWrapper';

const StyledContentOutlets = styled.div`
     overflow-y: scroll;
     width: 100%;
     padding: 30px 20px;
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
