import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Accordion from '../context/AccordionContext';
// import InputRange, { Range } from 'react-input-range';
// import 'react-input-range/lib/css/index.css';
import { FC, useState } from 'react';
import SearchAmenities from './SearchAmenities';

const StyledSearchFilter = styled.div`
     flex: 1;
     padding: 3rem 1rem;

     display: flex;
     flex-direction: column;

     .accordion {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 15px;

          .accordion_button {
               width: 100%;
               display: flex;
               justify-content: space-between;
               align-items: center;
               cursor: pointer;
               color: var(--primary-blue-300);

               h4 {
                    font-size: 12px;
               }

               svg {
                    font-size: 16px;
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

          .amenities {
               padding-left: 5px;

               display: flex;
               flex-direction: column;
               gap: 15px;
          }
     }
`;

interface RangeState {
     max: number;
     min: number;
}

const SearchFilter: FC = () => {
     const [value, setValue] = useState<RangeState>({ min: 2, max: 10 });

     // const handleRange = (newValue: number | Range) => {
     //      if (typeof newValue === 'number') {
     //           // Handling the case where newValue is a single number
     //           setValue({ ...value, min: newValue });
     //      } else {
     //           // Handling the case where newValue is a Range
     //           setValue(newValue);
     //      }
     // };

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
                         <Accordion.Button type='range'>
                              <button className='accordion_button'>
                                   <h4>Pricing</h4>

                                   <IoIosArrowDown />
                              </button>
                         </Accordion.Button>

                         <Accordion.Body windowName='range'>
                              <div className='accordion_content'>
                                   {/* <InputRange
                                        maxValue={10}
                                        minValue={1}
                                        value={value}
                                        onChange={handleRange}
                                   /> */}
                              </div>
                         </Accordion.Body>
                    </div>
               </Accordion>

               {/* AMENITIES */}
               <Accordion>
                    <div className='accordion'>
                         <Accordion.Button type='amenities'>
                              <button className='accordion_button'>
                                   <h4>Amenities</h4>

                                   <IoIosArrowDown />
                              </button>
                         </Accordion.Button>

                         <Accordion.Body windowName='amenities'>
                              <ul className='amenities'>
                                   <SearchAmenities amenity='Air-conditioned' />
                                   <SearchAmenities amenity='Air-conditioned' />
                                   <SearchAmenities amenity='Air-conditioned' />
                                   <SearchAmenities amenity='Air-conditioned' />
                                   <SearchAmenities amenity='Air-conditioned' />
                                   <SearchAmenities amenity='Air-conditioned' />
                              </ul>
                         </Accordion.Body>
                    </div>
               </Accordion>
          </StyledSearchFilter>
     );
};

export default SearchFilter;
