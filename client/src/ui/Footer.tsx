import { NavLink } from 'react-router-dom';
import FooterItems from '../ui/FooterItems';
import styled from 'styled-components';

const StyledFooter = styled.footer`
     padding: 30px 80px;
     background-color: var(--tertiary-blue-950);

     a:hover {
          text-decoration: underline;
     }

     .footer_top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;

          .footer_item {
               display: flex;
               flex-direction: column;
               justify-content: start;
               row-gap: 14px;

               h1 {
                    font-size: var(--large-text);
                    color: var(--primary-gray-300);
               }

               li a {
                    font-size: 13px;
                    color: var(--primary-gray-300);
               }
          }
     }

     .footer_bottom {
          display: flex;
          justify-content: space-around;

          a {
               font-size: 13px;
               color: var(--primary-gray-300);
          }
     }
`;

const Footer = () => {
     return (
          <StyledFooter className='footer'>
               <div className='footer_top'>
                    <ul className='footer_item'>
                         <h1>Company</h1>

                         <FooterItems to='/'>About</FooterItems>
                         <FooterItems to='/'>Mobile</FooterItems>
                         <FooterItems to='/'>Careers</FooterItems>
                         <FooterItems to='/'>Discove</FooterItems>
                         <FooterItems to='/'>How we works</FooterItems>
                    </ul>

                    <ul className='footer_item'>
                         <h1>Contact</h1>

                         <FooterItems to='/'>FAQs</FooterItems>
                         <FooterItems to='/'>Press</FooterItems>
                         <FooterItems to='/'>Affiliates</FooterItems>
                         <FooterItems to='/'>Advertise with us</FooterItems>
                    </ul>

                    <ul className='footer_item'>
                         <h1>More</h1>

                         <FooterItems to='/'>Help Center</FooterItems>
                         <FooterItems to='/'>Ad Choices</FooterItems>
                         <FooterItems to='/'>Contact Us</FooterItems>
                    </ul>
               </div>

               <div className='footer_bottom'>
                    <NavLink to='/'>Privacy</NavLink>
                    <NavLink to='/'>Terms and Condition</NavLink>
                    <NavLink to='/'>&copy;2023 staygotransit</NavLink>
               </div>
          </StyledFooter>
     );
};

export default Footer;
