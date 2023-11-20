import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../ui/Header';
import NavForm from '../ui/NavForm';
import OfferBox from '../ui/OfferBox';
import HotelBox from '../ui/HotelBox';
import TrendingItems from '../ui/TrendingItems';
import FooterItems from '../ui/FooterItems';
import Slider from '../context/SliderContext';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const StyledHome = styled.div`
     display: flex;
     flex-direction: column;
     row-gap: 60px;
     height: 100%;
     padding: 20px 0;

     .stay_search {
          display: flex;
          flex-direction: column;
          row-gap: 30px;
          padding: 0 20px;
     }

     .offers {
          display: flex;
          flex-direction: column;
          row-gap: 30px;
          padding: 0 20px;

          h3 {
               font-size: 20px;
          }

          .offer_grid {
               display: grid;
               column-gap: 20px;
               grid-template-columns: repeat(4, minmax(0, 1fr));
          }
     }

     .hotels {
          display: flex;
          flex-direction: column;
          row-gap: 30px;
          padding: 0 30px;

          .best_hotels {
               position: relative;
               width: 100%;
               border-radius: 10px;

               .hotel_items {
                    display: flex;
                    justify-content: space-between;
                    border-radius: var(--border-radius);
               }

               .arrow_btn-left {
                    position: absolute;
                    left: -15px;
                    top: 30%;
                    width: 35px;
                    height: 35px;
                    background-color: var(--primary-gray-200);
                    border-radius: var(--border-radius);
               }

               .arrow_btn-right {
                    position: absolute;
                    right: -15px;
                    top: 30%;
                    width: 35px;
                    height: 35px;
                    background-color: var(--primary-gray-200);
                    border-radius: var(--border-radius);
               }
          }
     }

     .trending {
          display: flex;
          flex-direction: column;
          row-gap: 25px;
          padding: 0 20px;

          h1 {
               font-size: 1.8rem;
               text-align: center;
               font-weight: 600;
          }

          p {
               text-align: center;
               font-size: 1rem;
               color: var(--primary-gray-100);
               font-weight: 200;
          }

          .trending_items {
               display: grid;
               grid-template-columns: repeat(3, minmax(0, 1fr));
               column-gap: 13px;
               row-gap: 20px;
          }
     }

     .footer {
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
     }
`;

const Homepage = () => {
     return (
          <StyledHome>
               <section className='stay_search'>
                    <Header>Find the stay that's right for you.</Header>

                    <NavForm />
               </section>
               <section className='offers'>
                    <h3>What we offers.</h3>

                    <div className='offer_grid'>
                         <OfferBox
                              header='Best deals on hotels'
                              icon='/deal.png'
                         >
                              See deals from 3M+ hotels and accommodations in
                              one place.
                         </OfferBox>

                         <OfferBox
                              header='Free cancellation'
                              icon='/cancellation.png'
                         >
                              Use our filter to find stays with free
                              cancellation.
                         </OfferBox>

                         <OfferBox
                              header='Millions of reviews'
                              icon='/reviews.png'
                         >
                              Check ratings based on millions of real guest
                              reviews.
                         </OfferBox>

                         <OfferBox
                              header='Stays for every need'
                              icon='/home.png'
                         >
                              Find your ideal stay from our many property types.
                         </OfferBox>
                    </div>
               </section>

               <section className='hotels'>
                    <Header>Best hotels in Nigeria</Header>

                    <div className='best_hotels'>
                         <div className='hotel_items'>
                              <Slider>
                                   <Slider.Content position={1}>
                                        <HotelBox
                                             name='Lagos Continental Hotel'
                                             star={4}
                                             city='Osun mall'
                                             image='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/1d/83/e4/intercontinental-lagos.jpg?w=1200&h=-1&s=1'
                                        />

                                        <HotelBox
                                             name='Fraser Suites Abuja'
                                             star={2}
                                             city='Abuja suite'
                                             image='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/09/81/70/bedroom-br.jpg?w=1200&h=-1&s=1'
                                        />

                                        <HotelBox
                                             name='Abuja Continental Hotel'
                                             star={1}
                                             city='Gbangualada'
                                             image='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/51/d3/c9/sheraton-abuja-hotel.jpg?w=1200&h=-1&s=1'
                                        />

                                        <HotelBox
                                             name='Transcorp Hilton Abuja'
                                             star={5}
                                             city='kabbi'
                                             image='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a9/77/4b/office-spaces.jpg?w=1100&h=-1&s=1'
                                        />
                                   </Slider.Content>
                              </Slider>

                              <Slider>
                                   <Slider.Content position={2}>
                                        <HotelBox
                                             name='Bako'
                                             star={4}
                                             city='Iwo'
                                             image='data:image/jpeg;base64,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'
                                        />

                                        <HotelBox
                                             name='Bako'
                                             star={4}
                                             city='Iwo'
                                             image='data:image/jpeg;base64,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'
                                        />

                                        <HotelBox
                                             name='Bako'
                                             star={4}
                                             city='Iwo'
                                             image='data:image/jpeg;base64,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'
                                        />
                                   </Slider.Content>
                              </Slider>

                              <Slider>
                                   <Slider.Content position={3}>
                                        <HotelBox
                                             name='Bako'
                                             star={4}
                                             city='Iwo'
                                             image='data:image/jpeg;base64,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'
                                        />

                                        <HotelBox
                                             name='Bako'
                                             star={4}
                                             city='Iwo'
                                             image='data:image/jpeg;base64,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'
                                        />

                                        <HotelBox
                                             name='Bako'
                                             star={4}
                                             city='Iwo'
                                             image='data:image/jpeg;base64,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'
                                        />
                                   </Slider.Content>
                              </Slider>

                              {/* NAVIGATION BUTTON */}
                              <Slider>
                                   <Slider.Button type='increase'>
                                        <button className='arrow-btn arrow_btn-left'>
                                             <IoIosArrowBack />
                                        </button>
                                   </Slider.Button>

                                   <Slider.Button type='decrease'>
                                        <button className='arrow-btn arrow_btn-right'>
                                             <IoIosArrowForward />
                                        </button>
                                   </Slider.Button>
                              </Slider>
                         </div>
                    </div>
               </section>

               <section className='trending'>
                    <h1>Trending hotels in Nigeria</h1>
                    <p>
                         The most searched for hotel destinations on
                         staygotransit
                    </p>

                    <div className='trending_items'>
                         <Link to='/'>
                              <TrendingItems />
                         </Link>
                         <Link to='/'>
                              <TrendingItems />
                         </Link>
                         <Link to='/'>
                              <TrendingItems />
                         </Link>
                         <Link to='/'>
                              <TrendingItems />
                         </Link>
                         <Link to='/'>
                              <TrendingItems />
                         </Link>
                         <Link to='/'>
                              <TrendingItems />
                         </Link>
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>{' '}
                         <Link to='/'>
                              <TrendingItems />
                         </Link>
                    </div>
               </section>
               <footer className='footer'>
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
                              <FooterItems to='/'>
                                   Advertise with us
                              </FooterItems>
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
               </footer>
          </StyledHome>
     );
};

export default Homepage;
