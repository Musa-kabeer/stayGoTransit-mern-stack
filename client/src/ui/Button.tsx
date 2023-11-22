import { FC, ReactNode } from 'react';

interface IButton {
     onClick?: () => void;
     children: ReactNode;
     cl: string;
     currentNumber?: number;
     length: number;
}

const Button: FC<IButton> = ({
     children,
     cl,
     currentNumber,
     onClick,
     length,
}) => {
     if (currentNumber === length) return null;

     if (cl === 'arrow_btn-left' && currentNumber === 1) return null;

     return (
          <button className={cl} onClick={onClick}>
               {children}
          </button>
     );
};

export default Button;
