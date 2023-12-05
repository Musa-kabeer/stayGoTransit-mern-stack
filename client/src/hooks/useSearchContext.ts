import { useContext } from 'react';
import { SearchContext } from '../context/SearchNavigationContext';

export const useSearchContext = () => {
     const context = useContext(SearchContext);

     if (context === undefined)
          throw new Error('SearchContext was used outside of SearchProvider');

     return context;
};
