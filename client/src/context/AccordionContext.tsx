import {
     Dispatch,
     FC,
     ReactElement,
     ReactNode,
     SetStateAction,
     cloneElement,
     createContext,
     useContext,
     useState,
} from 'react';

interface IProvider {
     children: ReactNode;
}

interface IButton {
     children: ReactNode;
     type: string;
}

interface IBody {
     children: ReactNode;
     windowName: string;
}

interface IValue {
     open: string[];
     setOpen: Dispatch<SetStateAction<string[]>>;
}

export const AccordionContext = createContext<IValue | undefined>(undefined);

const Accordion: FC<IProvider> & {
     Button: FC<IButton>;
     Body: React.FC<IBody>;
} = ({ children }) => {
     const [open, setOpen] = useState<string[]>([]);

     return (
          <AccordionContext.Provider value={{ setOpen, open }}>
               {children}
          </AccordionContext.Provider>
     );
};

const Button: FC<IButton> = ({ children, type }) => {
     const { open, setOpen } = useContext(AccordionContext)!;

     const handleClick = () => {
          if (!type) return;

          if (open.includes(type)) {
               const updated = open.filter((acc) => acc !== type);

               return setOpen(updated);
          }

          setOpen((open: string[]) => [...open, type]);
     };

     return cloneElement(children as ReactElement, {
          onClick: handleClick,
     });
};

const Body: FC<IBody> = ({ children, windowName }) => {
     const { open } = useContext(AccordionContext)!;

     if (!open.includes(windowName)) return null;

     return children;
};

Accordion.Button = Button;
Accordion.Body = Body;

export default Accordion;
