import { useEffect } from 'react';
import { useSearchContext } from './useSearchContext';

export const useIntersectionObserver = (clElement: string) => {
     const { setIsIntersecting } = useSearchContext();

     useEffect(() => {
          const observeEl = document.querySelector(`.${clElement}`)!; // observer element

          const observerOptions: IntersectionObserverInit = {
               root: null,
               threshold: 0.1,
          };

          const callback: IntersectionObserverCallback = (entries) => {
               entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                         return setIsIntersecting(true);
                    }

                    return setIsIntersecting(false);
               });
          };

          // create observer instance
          const observer = new IntersectionObserver(callback, observerOptions);

          observer.observe(observeEl);
     }, [setIsIntersecting, clElement]);
};
