import {
     ReactElement,
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

const Modal: React.FC<AuthProviderProps> & {
     Button: React.FC<ButtonProps>;
     Body: React.FC<BodyProps>;
} = ({ children }) => {
     const [open, setOpen] = useState('');

     const close = () => setOpen('');

     return (
          <AuthContext.Provider
               value={{
                    open,
                    close,
                    setOpen,
               }}
          >
               {children}
          </AuthContext.Provider>
     );
};

const Button: React.FC<ButtonProps> = ({ children, name }) => {
     /* 
     "!"
     is used to typescript 
     that to treat the value as 
     non-nullable because it will 
     never be undefined.
     */
     const { setOpen } = useContext(AuthContext)!;

     const handleClick = () => {
          setOpen(name);
     };

     return cloneElement(children as React.ReactElement, {
          onClick: handleClick,
     });
};

const Body: React.FC<BodyProps> = ({ children, windowName }) => {
     /* 
     "!"
     is used to typescript 
     that to treat the value as 
     non-nullable because it will 
     never be undefined.
     */
     const { open, close } = useContext(AuthContext)!;

     if (open !== windowName || open === '') return null;

     return createPortal(
          cloneElement(children as ReactElement, {
               onCloseTab: () => close(),
          }),
          document.body
     );
};

Modal.Button = Button;
Modal.Body = Body;

export default Modal;
