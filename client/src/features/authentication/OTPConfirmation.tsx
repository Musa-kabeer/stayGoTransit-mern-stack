import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OTPInput from 'react-otp-input';
import { useOTPVerification } from './useOTPConfirmation';

const StyledOTPConfirmation = styled.div`
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     row-gap: 15px;

     img {
          align-self: center;
          object-fit: cover;
     }

     h1 {
          font-size: var(--large-text);
          font-weight: 600;
     }

     p {
          font-size: var(--small-text);
          font-weight: 300;
          line-height: 20px;
     }

     .otp {
          display: flex;
          justify-content: center;
     }

     footer {
          font-size: 12px;
     }
`;

const OTPConfirmation = () => {
     const [otp, setOtp] = useState<string>('');
     const email = localStorage.getItem('staygotransitemail');
     const { status, verifyOTP } = useOTPVerification();

     useEffect(() => {
          if (otp.length === 4) {
               verifyOTP({ otp });
          }
     }, [verifyOTP, otp]);

     return (
          <StyledOTPConfirmation>
               <img
                    src='/signup.png'
                    alt='Create an Account'
                    style={{
                         width: '90px',
                         height: '90px',
                    }}
               />

               <h1>Please verify you email address</h1>

               <p>
                    We just send a 4-digit verification code to your email:{' '}
                    <strong>{email}</strong>. Please enter the code below:
               </p>

               <div className='otp'>
                    <OTPInput
                         value={otp}
                         onChange={setOtp}
                         numInputs={4}
                         renderSeparator={<span></span>}
                         renderInput={(props) => <input {...props} />}
                         containerStyle={{
                              display: 'flex',
                              columnGap: '10px',
                         }}
                         inputStyle={{
                              width: '65px',
                              height: '50px',
                              border: '1px solid var(--primary-gray-300)',
                              outline: 'none',
                              borderRadius: 'var(--border-radius)',
                              fontSize: '17px',
                              background:
                                   status === 'pending'
                                        ? 'var(--secondary-gray-600)'
                                        : 'none',
                         }}
                    />
               </div>

               <footer>Can't find your email? Try your spam folder.</footer>
          </StyledOTPConfirmation>
     );
};

export default OTPConfirmation;
