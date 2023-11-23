import { FC } from 'react';
import styled from 'styled-components';
import Header from '../ui/Header';
import HotelBox from '../ui/HotelBox';
import Slider from '../context/SliderContext';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../ui/Button';

interface IData {
     name: string;
     star: number;
     city: string;
     image: string;
}

interface ISliderComponent {
     header: string;
     data: IData[];
}

const StylingScroll = styled.section`
     display: flex;
     flex-direction: column;
     row-gap: 30px;
     padding: 0 20px;

     @media screen and (max-width: 764px) {
          padding: 0px 50px;
     }

     .best_hotels {
          position: relative;
          width: 100%;
          border-radius: 10px;

          .hotel_items {
               display: flex;
               transition: all 1s ease-in-out;

               .arrow_btn-left {
                    position: absolute;
                    left: -15px;
                    top: 30%;
                    width: 35px;
                    height: 35px;
                    background-color: var(--primary-gray-200);
                    border-radius: var(--border-radius);
                    cursor: pointer;
                    font-size: 20px;
               }

               .arrow_btn-right {
                    position: absolute;
                    right: -15px;
                    top: 30%;
                    width: 35px;
                    height: 35px;
                    background-color: var(--primary-gray-200);
                    border-radius: var(--border-radius);
                    cursor: pointer;
                    font-size: 20px;
               }
          }
     }
`;

const SliderComponent: FC<ISliderComponent> = ({ header, data }) => {
     return (
          <StylingScroll>
               <Header>{header}</Header>

               <div className='best_hotels'>
                    <div className='hotel_items'>
                         <Slider>
                              <Slider.Content position={1}>
                                   <HotelBox
                                        name={data[0].name}
                                        star={data[0].star}
                                        city={data[0].city}
                                        image={data[0].image}
                                   />

                                   <HotelBox
                                        name={data[1].name}
                                        star={data[1].star}
                                        city={data[1].city}
                                        image={data[1].image}
                                   />

                                   <HotelBox
                                        name={data[2].name}
                                        star={data[2].star}
                                        city={data[2].city}
                                        image={data[2].image}
                                   />

                                   <HotelBox
                                        name={data[3].name}
                                        star={data[3].star}
                                        city={data[3].city}
                                        image={data[3].image}
                                   />
                              </Slider.Content>

                              <Slider.Content position={2}>
                                   <HotelBox
                                        name={data[4].name}
                                        star={data[4].star}
                                        city={data[4].city}
                                        image={data[4].image}
                                   />

                                   <HotelBox
                                        name={data[5].name}
                                        star={data[5].star}
                                        city={data[5].city}
                                        image={data[5].image}
                                   />

                                   <HotelBox
                                        name={data[6].name}
                                        star={data[6].star}
                                        city={data[6].city}
                                        image={data[6].image}
                                   />

                                   <HotelBox
                                        name={data[7].name}
                                        star={data[7].star}
                                        city={data[7].city}
                                        image={data[7].image}
                                   />
                              </Slider.Content>

                              <Slider.Content position={3}>
                                   <HotelBox
                                        name={data[8].name}
                                        star={data[8].star}
                                        city={data[8].city}
                                        image={data[8].image}
                                   />

                                   <HotelBox
                                        name={data[9].name}
                                        star={data[9].star}
                                        city={data[9].city}
                                        image={data[9].image}
                                   />

                                   <HotelBox
                                        name={data[10].name}
                                        star={data[10].star}
                                        city={data[10].city}
                                        image={data[10].image}
                                   />

                                   <HotelBox
                                        name={data[11].name}
                                        star={data[11].star}
                                        city={data[11].city}
                                        image={data[11].image}
                                   />
                              </Slider.Content>

                              {/* NAVIGATION BUTTON */}
                              <Slider.Button type='decrease'>
                                   <Button length={1} cl='arrow_btn-left'>
                                        <IoIosArrowBack />
                                   </Button>
                              </Slider.Button>

                              <Slider.Button type='increase'>
                                   <Button length={3} cl='arrow_btn-right'>
                                        <IoIosArrowForward />
                                   </Button>
                              </Slider.Button>
                         </Slider>
                    </div>
               </div>
          </StylingScroll>
     );
};

export default SliderComponent;
