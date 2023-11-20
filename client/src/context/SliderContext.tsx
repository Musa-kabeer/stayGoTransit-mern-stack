import {
     ReactElement,
     ReactNode,
     cloneElement,
     createContext,
     useContext,
     useState,
} from 'react';
import { styled } from 'styled-components';

const StyledContent = styled.div`
     width: 100%;
     display: flex;
     justify-content: space-between;
     column-gap: 19px;
`;

interface IProvider {
     children: ReactNode;
}

interface IButton {
     children: ReactNode;
     type: string;
}

interface IContent {
     children: ReactNode;
     position: number;
}

interface IValue {
     slider: number;
     increase: () => void;
     decrease: () => void;
}

const SliderContext = createContext<IValue | undefined>(undefined);

const Slider: React.FC<IProvider> & {
     Button: React.FC<IButton> /* Attaching the button on Slider object */;
     Content: React.FC<IContent> /* Attaching the button on Slider object */;
} = ({ children }) => {
     const [slider, setSlider] = useState<number>(1);

     const increase = () => setSlider((slider) => slider + 1);
     const decrease = () => setSlider((slider) => slider - 1);

     return (
          <SliderContext.Provider
               value={{
                    slider,
                    increase,
                    decrease,
               }}
          >
               {children}
          </SliderContext.Provider>
     );
};

const Button: React.FC<IButton> = ({ children, type }) => {
     const { increase, decrease } = useContext(SliderContext)!;

     const handlechange = () => {
          if (type === 'increase') {
               return increase();
          }

          decrease();
     };

     return cloneElement(children as ReactElement, {
          onClick: handlechange,
     });
};

const Content: React.FC<IContent> = ({ children, position }) => {
     const { slider } = useContext(SliderContext)!;

     if (position !== slider) return null;

     return <StyledContent>{children}</StyledContent>;
};

Slider.Button = Button;
Slider.Content = Content;

export default Slider;
