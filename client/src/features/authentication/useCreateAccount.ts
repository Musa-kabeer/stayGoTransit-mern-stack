import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { useAuthContext } from '../../hooks/useAuthContext';
import { toast } from 'react-hot-toast';

interface EmailData {
     email: string;
}

interface UseContinueWithEmailResult {
     status: string;
     createAccount: UseMutateFunction<void, Error, EmailData, unknown>;
}

export const useCreateAccount = (): UseContinueWithEmailResult => {
     const { setCurrentPage } = useAuthContext();
     /**
      *  importing .env neccessary variables
      */
     const { MODE, VITE_DEV_BACKEND_URL, VITE_PROD_BACKEND_URL } = import.meta
          .env;

     const { status, mutate: createAccount } = useMutation({
          mutationFn: async (email: EmailData) => {
               try {
                    const response = await fetch(
                         `${
                              MODE === 'production'
                                   ? VITE_PROD_BACKEND_URL
                                   : VITE_DEV_BACKEND_URL
                         }/api/v1/auth/signup`,
                         {
                              method: 'POST',

                              headers: {
                                   'Content-Type': 'application/json',
                              },

                              credentials: 'include',

                              body: JSON.stringify(email),
                         }
                    );

                    const data = await response.json();

                    if (data.status === 'fail') {
                         throw new Error(data.message);
                    }

                    // user as an account before
                    if (data.status === 'success') {
                         setCurrentPage('verify-otp');
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

     return { status, createAccount };
};
