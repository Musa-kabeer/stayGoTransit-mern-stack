import {
     ReactElement,
     ReactNode,
     cloneElement,
     createContext,
     isValidElement,
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
     slider: number | undefined;
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

     const contextValue: IValue = {
          slider,
          increase,
          decrease,
     };

     return (
          <SliderContext.Provider value={contextValue}>
               {children}
          </SliderContext.Provider>
     );
};

const Button: React.FC<IButton> = ({ children, type }) => {
     const { slider, increase, decrease } = useContext(SliderContext)!;
     console.log(slider);
     const handlechange = () => {
          if (type === 'increase' && slider !== 3) {
               increase();
          }

          if (type === 'decrease' && slider !== 1) {
               decrease();
          }
     };

     if (isValidElement(children)) {
          const cloneEl = cloneElement(children as ReactElement, {
               onClick: handlechange,
               currentNumber: slider,
          });

          return cloneEl;
     }
};

const Content: React.FC<IContent> = ({ children, position }) => {
     const { slider } = useContext(SliderContext)!;

     if (position !== slider) return null;

     return <StyledContent>{children}</StyledContent>;
};

Slider.Button = Button;
Slider.Content = Content;

export default Slider;
