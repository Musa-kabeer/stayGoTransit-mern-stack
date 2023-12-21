import { FC } from 'react';
import styled from 'styled-components';

interface SearchAmenitiesProps {
     amenity: string;
}

const StyledAmenity = styled.li`
     display: flex;
     align-items: center;
     gap: 10px;
     color: var(--primary-blue-300);

     span {
          font-size: 12px;
     }
`;

const SearchAmenities: FC<SearchAmenitiesProps> = ({ amenity }) => {
     return (
          <StyledAmenity>
               <input type='checkbox' name='amenities' id='amenities' />{' '}
               <span>{amenity}</span>
          </StyledAmenity>
     );
};

export default SearchAmenities;
