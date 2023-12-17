import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Accordion from '../context/AccordionContext';
import { RANGE_MAX, RANGE_MIN } from '../helpers/utils';

const StyledSearchFilter = styled.div`
     flex: 1;
     padding: 3rem 1rem;
     /* background: green; */

     .accordion {
          padding: 1rem 0;
          border-bottom: 1px solid green;

          .accordion_button {
               /* padding: 1rem 0; */
               width: 100%;
               display: flex;
               justify-content: space-between;
               align-items: center;
               cursor: pointer;

               h4 {
                    font-size: 16px;
               }

               svg {
                    font-size: 20px;
               }
          }

          &_content {
               display: flex;
               justify-content: space-between;

               button {
                    cursor: pointer;
               }

               svg {
                    font-size: 2rem;
               }
          }
     }
`;

const SearchFilter = () => {
     return (
          <StyledSearchFilter>
               {/* RATINGS */}
               <Accordion>
                    <div className='accordion'>
                         <Accordion.Button type='hotel-class'>
                              <button className='accordion_button'>
                                   <h4>Hotel class</h4>

                                   <IoIosArrowDown />
                              </button>
                         </Accordion.Button>

                         <Accordion.Body windowName='hotel-class'>
                              <div className='accordion_content'>
                                   <button>
                                        <IoIosStar />
                                   </button>

                                   <button>
                                        <IoIosStar />
                                   </button>

                                   <button>
                                        <IoIosStar />
                                   </button>

                                   <button>
                                        <IoIosStar />
                                   </button>

                                   <button>
                                        <IoIosStar />
                                   </button>
                              </div>
                         </Accordion.Body>
                    </div>
               </Accordion>

               {/* PRICING */}
               <Accordion>
                    <div className='accordion'>
                         <Accordion.Button type='hotel-range'>
                              <button className='accordion_button'>
                                   <h4>Pricing</h4>

                                   <IoIosArrowDown />
                              </button>
                         </Accordion.Button>

                         <Accordion.Body windowName='hotel-range'>
                              <div className='accordion_content'>
                                   <Slider
                                        range
                                        max={RANGE_MAX}
                                        min={RANGE_MIN}
                                   />
                              </div>
                         </Accordion.Body>
                    </div>
               </Accordion>
          </StyledSearchFilter>
     );
};

export default SearchFilter;
