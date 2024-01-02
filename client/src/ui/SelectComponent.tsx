import { FC, useState } from 'react';
import Select from 'react-select';
import { MySelectOption } from '../helpers/interfaces';

interface SelectComponentProps {
     options: MySelectOption[];
     placeholder?: string;
     width?: string;
}

const SelectComponent: FC<SelectComponentProps> = ({
     options,
     placeholder,
     width,
}) => {
     const [selectedOption, setSelectedOption] =
          useState<MySelectOption | null>(null);

     return (
          <Select
               defaultValue={selectedOption}
               onChange={setSelectedOption}
               options={options}
               placeholder={placeholder}
               styles={{
                    control: (baseStyles) => ({
                         ...baseStyles,
                         width: width ? width : '',
                         textAlign: 'center',
                         cursor: 'pointer',
                         borderTop: 'none',
                         borderBottom: 'none',
                         borderRadius: '0px',
                    }),
               }}
          />
     );
};

export default SelectComponent;
