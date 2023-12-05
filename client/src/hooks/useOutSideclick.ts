import { useEffect, useRef } from 'react';

interface outSideClickProps {
     handler: () => void;
     listenCapturing?: boolean;
}

export const useOutSideclick = ({
     handler,
     listenCapturing = true,
}: outSideClickProps) => {
     const clickRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          function handleClick(e: MouseEvent) {
               if ((e.target as HTMLElement)?.dataset?.overlay) {
                    handler();

                    return;
               }
          }

          document.addEventListener('click', handleClick, listenCapturing);

          return () => {
               document.removeEventListener(
                    'click',
                    handleClick,
                    listenCapturing
               );
          };
     }, [handler, listenCapturing]);

     return clickRef;
};
