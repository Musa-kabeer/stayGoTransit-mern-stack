import styled from 'styled-components';
import SearchFilter from '../ui/SearchFilter';
import SearchResult from '../ui/SearchResult';
import Footer from '../ui/Footer';

const StyledSearchResult = styled.div`
     display: flex;
     height: 100%;

     .searchResults {
          flex: 5;
          padding: 1.5rem;

          display: flex;
          flex-direction: column;
          gap: 20px;
          max-height: 100%;
          overflow-y: auto;
     }
`;

const SearchResults = () => {
     return (
          <>
               <StyledSearchResult>
                    <SearchFilter />

                    <div className='searchResults'>
                         {Array.from({ length: 20 }, (_, i) => i + 1).map(
                              (_, i) => (
                                   <SearchResult key={i + 1} />
                              )
                         )}
                    </div>
               </StyledSearchResult>
               <Footer />
          </>
     );
};

export default SearchResults;
