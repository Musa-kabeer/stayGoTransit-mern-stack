import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface IItems {
     children: ReactNode;
     to: string;
}

const FooterItems: React.FC<IItems> = ({ children, to }) => {
     return (
          <li>
               <NavLink to={to}>{children}</NavLink>
          </li>
     );
};

export default FooterItems;
