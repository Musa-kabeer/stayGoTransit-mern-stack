import { FC, useState } from 'react';
import Select, { OptionTypeBase } from 'react-select';

interface MyOptionType extends OptionTypeBase {
     label: string;
     value: string;
}

const options: MyOptionType[] = [
     { value: 'chocolate', label: 'Chocolate' },
     { value: 'strawberry', label: 'Strawberry' },
     { value: 'vanilla', label: 'Vanilla' },
];

const SelectComponent: FC = () => {
     const [selectedOption, setSelectedOption] = useState<MyOptionType | null>(
          null
     );

     return (
          <Select
               defaultValue={selectedOption}
               onChange={setSelectedOption}
               options={options}
               placeholder='Filter by ratings...'
          />
     );
};

export default SelectComponent;
