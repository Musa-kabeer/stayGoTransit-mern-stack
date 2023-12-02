import { useContext } from 'react';
import { AsideContext } from '../context/AsideContext';

export const useAsideContext = () => {
     const context = useContext(AsideContext);

     if (!context) throw new Error('Context was placed in the wrong place');

     return context;
};
