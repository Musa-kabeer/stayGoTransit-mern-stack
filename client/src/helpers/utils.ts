import { format, getMonth } from 'date-fns';

const SERVER_DOMAIN = 'http://localhost:4545';

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

const RANGE_MIN = 10;
const RANGE_MAX = 0;
export {
     SERVER_DOMAIN,
     dayOfTomorrow,
     dayOfWeek,
     month,
     today,
     RANGE_MIN,
     RANGE_MAX,
};
