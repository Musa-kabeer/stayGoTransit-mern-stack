import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface IOTPData {
     otp: string;
}

interface UseContinueWithEmailResult {
     status: string;
     verifyOTP: UseMutateFunction<void, Error, IOTPData, unknown>;
}

export const useOTPVerification = (): UseContinueWithEmailResult => {
     const navigate = useNavigate();
     /**
      *  importing .env neccessary variables
      */
     const { MODE, VITE_DEV_BACKEND_URL, VITE_PROD_BACKEND_URL } = import.meta
          .env;

     const { status, mutate: verifyOTP } = useMutation({
          mutationFn: async (otp: IOTPData) => {
               try {
                    const response = await fetch(
                         `${
                              MODE === 'production'
                                   ? VITE_PROD_BACKEND_URL
                                   : VITE_DEV_BACKEND_URL
                         }/api/v1/auth/otp-verification`,
                         {
                              method: 'POST',

                              headers: {
                                   'Content-Type': 'application/json',
                              },

                              credentials: 'include',

                              body: JSON.stringify(otp),
                         }
                    );

                    const data = await response.json();

                    if (data.status === 'fail') {
                         throw new Error(data.message);
                    }

                    // user as no account before
                    if (data.status === 'success') {
                         JSON.stringify(
                              localStorage.setItem('staygotransitemail', '')
                         );

                         navigate('/stays', { replace: true });

                         window.location.reload();
                    }
               } catch (err: unknown) {
                    if (err instanceof Error) {
                         console.log(err);
                         toast.error(err.message);
                    } else {
                         console.error('Non-Error exception caught:', err);
                    }
               }
          },
     });

     return { status, verifyOTP };
};
