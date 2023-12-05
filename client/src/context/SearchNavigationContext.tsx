import {
     Dispatch,
     FC,
     ReactNode,
     SetStateAction,
     createContext,
     useState,
} from 'react';

interface ISearch {
     isIntersecting: boolean;
     setIsIntersecting: Dispatch<SetStateAction<boolean>>;
}

interface IProvider {
     children: ReactNode;
}

export const SearchContext = createContext<ISearch | undefined>(undefined);

export const SearchNavigationProvider: FC<IProvider> = ({ children }) => {
     const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

     return (
          <SearchContext.Provider value={{ isIntersecting, setIsIntersecting }}>
               {children}
          </SearchContext.Provider>
     );
};
