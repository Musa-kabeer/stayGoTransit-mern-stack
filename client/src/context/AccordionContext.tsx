// Importing necessary dependencies from React
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

// Defining prop types for the Accordion components
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

// Creating a context to share state among components
export const AccordionContext = createContext<IValue | undefined>(undefined);

// The main Accordion component
const Accordion: FC<IProvider> & {
     Button: FC<IButton>;
     Body: React.FC<IBody>;
} = ({ children }) => {
     // State to manage the open/close status of accordion items
     const [open, setOpen] = useState<string[]>([]);

     return (
          <AccordionContext.Provider value={{ setOpen, open }}>
               {children}
          </AccordionContext.Provider>
     );
};

// The Button component, a compound component of Accordion
const Button: FC<IButton> = ({ children, type }) => {
     // Accessing context to get the shared state
     const { open, setOpen } = useContext(AccordionContext)!;

     // Handling click to toggle open/close status
     const handleClick = () => {
          if (!type) return;

          if (open.includes(type)) {
               const updated = open.filter((acc) => acc !== type);
               return setOpen(updated);
          }

          setOpen((open: string[]) => [...open, type]);
     };

     // Cloning the original element with additional props
     return cloneElement(children as ReactElement, {
          onClick: handleClick,
     });
};

// The Body component, another compound component of Accordion
const Body: FC<IBody> = ({ children, windowName }) => {
     // Accessing context to get the shared state
     const { open } = useContext(AccordionContext)!;

     // Displaying content only if the corresponding item is open
     if (!open.includes(windowName)) return null;

     return children;
};

// Adding Button and Body as properties to Accordion for easy usage
Accordion.Button = Button;
Accordion.Body = Body;

// Exporting Accordion as the default component
export default Accordion;
