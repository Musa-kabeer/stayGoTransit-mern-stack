import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { SERVER_DOMAIN } from '../../helpers/utils';
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

     const { status, mutate: createAccount } = useMutation({
          mutationFn: async (email: EmailData) => {
               try {
                    const response = await fetch(
                         `${SERVER_DOMAIN}/api/v1/auth/signup`,
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
               } catch (err: any) {
                    console.log(err);
                    toast.error(err.message);
               }
          },
     });

     return { status, createAccount };
};
