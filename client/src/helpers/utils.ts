import { useContext } from 'react';
import { addDays, format, getMonth } from 'date-fns';
import { AsideContext } from '../context/AsideContext';

const useAsideContext = () => {
     const context = useContext(AsideContext);

     if (!context) throw new Error('Context was placed in the wrong place');

     return context;
};

// DATE MANIPULATION
const dayOfWeek = (date: Date): string => {
     return format(date, 'EEEE').slice(0, 3);
};

const month = (date: Date): number => {
     return getMonth(date) + 1;
};

const today = (date: Date): string => {
     return format(date, 'dd');
};

const dayOfTomorrow = (date: Date): string => {
     return format(date, 'EEEE').slice(0, 3);
};

export { useAsideContext, dayOfTomorrow, dayOfWeek, month, today };
