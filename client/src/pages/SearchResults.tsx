import styled from 'styled-components';
import SearchFilter from '../ui/SearchFilter';
import SearchResult from '../ui/SearchResult';

const StyledSearchResult = styled.div`
     display: flex;
     height: 100%;

     .searchResults {
          flex: 5;
          background: #1b011bac;
     }
`;

const SearchResults = () => {
     return (
          <StyledSearchResult>
               <SearchFilter />

               <div className='searchResults'>
                    <SearchResult />
               </div>
          </StyledSearchResult>
     );
};

export default SearchResults;
