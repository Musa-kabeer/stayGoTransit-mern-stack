import {
     FC,
     ReactNode,
     createContext,
     // useEffect,
     // useRef,
     useState,
     Dispatch,
     SetStateAction,
     useEffect,
} from 'react';

interface IAuthInterface {
     currentPage: string;
     setCurrentPage: Dispatch<SetStateAction<string>>;
     emailId: string;
     setEmailId: Dispatch<SetStateAction<string>>;
}

interface IProvider {
     children: ReactNode;
}

// const localStorageData: string = JSON.parse(
//      localStorage.getItem('staygotransitCurrentOption') ?? 'null'
// );

export const AuthContext = createContext<IAuthInterface | undefined>(undefined);

export const AuthContextProvider: FC<IProvider> = ({ children }) => {
     const [currentPage, setCurrentPage] = useState<string>('');
     const [emailId, setEmailId] = useState('');

     // update localstorage on value change
     useEffect(() => {
          JSON.stringify(
               localStorage.setItem('staygotransitCurrentOption', currentPage)
          );
     }, [currentPage]);

     return (
          <AuthContext.Provider
               value={{ emailId, setEmailId, currentPage, setCurrentPage }}
          >
               {children}
          </AuthContext.Provider>
     );
};
