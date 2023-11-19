import { ReactNode } from 'react';
import styled from 'styled-components';

interface IOffer {
     children: ReactNode;
     header: string;
     icon: string;
}

const StyledOffer = styled.div`
     padding: 10px;
     border: 1px solid var(--tertiary-blue-900);
     border-radius: var(--border-radius);
     line-height: 15px;
     box-shadow: var(--shadow-4);

     img {
          width: 40px;
          height: 40px;
     }

     h4 {
          font-size: 15px;
          margin: 10px 0;
     }

     p {
          font-size: 12px;
     }
`;

const OfferBox: React.FC<IOffer> = ({ children, header, icon }) => {
     return (
          <StyledOffer>
               <img src={icon} alt='' />
               <h4>{header}</h4>
               <p>{children}</p>
          </StyledOffer>
     );
};

export default OfferBox;
