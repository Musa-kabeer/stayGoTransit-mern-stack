import { ReactNode, createContext, useState } from 'react';

interface AsideProviderProps {
     children: ReactNode;
}

interface AsideProps {
     mode: boolean;
     changeMode: () => void;
}

interface AsideValue {
     mode: boolean;
     changeMode: () => void;
}

export const AsideContext = createContext<AsideProps | undefined>(undefined);

export const AsideContextProvider: React.FC<AsideProviderProps> = ({
     children,
}) => {
     const [mode, setMode] = useState<boolean>(false);

     const changeMode = () => setMode((mode) => !mode);

     const parseValue: AsideValue = {
          mode,
          changeMode,
     };

     return (
          <AsideContext.Provider value={parseValue}>
               {children}
          </AsideContext.Provider>
     );
};
