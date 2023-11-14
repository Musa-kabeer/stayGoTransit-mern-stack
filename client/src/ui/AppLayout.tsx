import { Outlet } from 'react-router-dom';

import { AppWrapper } from './AppWrapper';
import Navbar from './Navbar';
import { MainWrapper } from './MainWrapper';
import AsideWrapper from './AsideWrapper';

const AppLayout: React.FC = () => {
     return (
          <AppWrapper>
               <Navbar />

               <MainWrapper>
                    <AsideWrapper />

                    <div>
                         <Outlet />
                    </div>
               </MainWrapper>
          </AppWrapper>
     );
};

export default AppLayout;
