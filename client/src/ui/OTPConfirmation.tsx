import { useState } from 'react';
import styled from 'styled-components';
import OTPInput from 'react-otp-input';

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
`;

const OTPConfirmation = () => {
     const [otp, setOtp] = useState<string>('');

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
                    We just send a 6-digit verification code to your email:{' '}
                    <strong>musaabdulkabeer19@gmail.com</strong>. Please enter
                    the code below:
               </p>

               <div className='otp'>
                    <OTPInput
                         value={otp}
                         onChange={setOtp}
                         numInputs={4}
                         renderSeparator={<span> </span>}
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
                         }}
                    />
               </div>

               <footer>Can't find your email? Try your spam folder.</footer>
          </StyledOTPConfirmation>
     );
};

export default OTPConfirmation;
