import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { SERVER_DOMAIN } from '../../helpers/utils';
import { useAuthContext } from '../../hooks/useAuthContext';
import { toast } from 'react-hot-toast';

interface EmailData {
     email: string;
}

interface UseContinueWithEmailResult {
     status: string;
     continueWithEmail: UseMutateFunction<void, Error, EmailData, unknown>;
}

export const useContinueWithEmail = (): UseContinueWithEmailResult => {
     const { setCurrentPage } = useAuthContext();

     const { status, mutate: continueWithEmail } = useMutation({
          mutationFn: async (email: EmailData) => {
               try {
                    const response = await fetch(
                         `${SERVER_DOMAIN}/api/v1/auth`,
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

                    // user as no account before
                    if (
                         data.status === 'success' &&
                         data.navigation === 'consent-screen'
                    ) {
                         JSON.stringify(
                              localStorage.setItem(
                                   'staygotransitemail',
                                   data.email
                              )
                         );

                         setCurrentPage(data.navigation);
                    }

                    // user as an account before
                    if (data.status === 'success') {
                         setCurrentPage(data.navigation);
                    }
               } catch (err: any) {
                    console.log(err);
                    toast.error(err.message);
               }
          },
     });

     return { status, continueWithEmail };
};
