import styled from 'styled-components';
import SearchFilter from '../ui/SearchFilter';

const StyledSearchResult = styled.div`
     display: flex;
     height: 100%;

     .searchResults {
          flex: 5;
          background: #1b011bac;
     }
`;

const SearchResult = () => {
     return (
          <StyledSearchResult>
               <SearchFilter />

               <div className='searchResults'>2</div>
          </StyledSearchResult>
     );
};

export default SearchResult;
