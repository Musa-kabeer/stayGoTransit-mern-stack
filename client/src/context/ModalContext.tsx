import {
     ReactNode,
     cloneElement,
     createContext,
     useContext,
     useState,
} from 'react';
import { createPortal } from 'react-dom';

interface AuthProviderProps {
     children: ReactNode;
}

interface contextValue {
     open: string;
     close: () => void;
     setOpen: (value: string) => void;
}

interface ButtonProps {
     name: string;
     children: ReactNode;
}

interface BodyProps {
     children: ReactNode;
     windowName: string;
}

const AuthContext = createContext<contextValue | undefined>(undefined);

const Modal: React.FC<AuthProviderProps> = ({ children }) => {
     const [open, setOpen] = useState('');

     const close = () => setOpen('');

     const initialContextValue: contextValue = {
          open,
          close,
          setOpen,
     };

     return (
          <AuthContext.Provider value={initialContextValue}>
               {children}
          </AuthContext.Provider>
     );
};

const Button: React.FC<ButtonProps> = ({ children, name }) => {
     const { setOpen } = useContext(AuthContext);

     const handleClick = () => {
          setOpen(name);
     };

     return cloneElement(children, {
          onClick: handleClick,
     });
};

const Body: React.FC<BodyProps> = ({ children, windowName }) => {
     const { open, close } = useContext(AuthContext);

     if (open !== windowName || open === '') return null;

     return createPortal(
          cloneElement(children as React.ReactElement, {
               onCloseTab: () => close(),
          }),
          document.body
     );
};

Modal.Button = Button;
Modal.Body = Body;

export default Modal;
