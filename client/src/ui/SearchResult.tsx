import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CiHeart } from 'react-icons/ci';
// import { FaHeart } from 'react-icons/fa6';

const StyledResult = styled.div`
     width: 100%;
     border-radius: 8px;
     background: var(--primary-gray-200);
     color: var(--tertiary-gray-900);
     padding: 1rem;

     display: flex;
     justify-content: space-between;
     gap: 10px;

     .left_result {
          flex: 5;
          border-right: 1px solid var(--primary-gray-300);
          display: flex;
          gap: 10px;

          .image_container {
               flex: 1;
               position: relative;

               img {
                    width: 100%;
                    border-radius: 4px;
               }

               div {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #0000008e;
                    color: #fff;
                    font-size: 30px;
                    padding: 3px 8px;
                    border-radius: 6px;
                    cursor: pointer;

                    &:hover {
                         background: #000000f0;
                    }
               }
          }

          .content {
               flex: 2;
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               padding: 10px 0;

               &_top {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    a {
                         font-size: 1.2rem;
                         font-weight: 700;
                         color: var(--tertiary-gray-900);
                         text-decoration: none;

                         font-size: 2rem;
                         font-weight: 500;
                         line-height: 30px;

                         &:hover {
                              text-decoration: underline;
                         }
                    }

                    .provision {
                         display: flex;
                         gap: 10px;

                         span {
                              font-size: 1rem;
                         }
                    }
               }

               &_bottom {
                    display: flex;
                    gap: 20px;
               }
          }
     }

     .right_result {
          flex: 1;
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          gap: 10px;

          h2 {
               font-size: 1.7rem;
               font-weight: 700;
          }

          button {
               background: linear-gradient(
                    to left,
                    var(--tertiary-blue-800),
                    var(--tertiary-blue-950)
               );
               color: var(--primary-blue-200);
               padding: 10px 20px;
               border-radius: 4px;

               &:hover {
                    background: linear-gradient(
                         to left,
                         var(--tertiary-blue-950),
                         var(--tertiary-blue-800)
                    );
               }
          }
     }
`;

const SearchResult = () => {
     return (
          <Link to='/'>
               <StyledResult>
                    <div className='left_result'>
                         <div className='image_container'>
                              <img
                                   src='/eko-hotels-suites.jpeg'
                                   alt='Eko Hotel'
                              />

                              <div>
                                   <CiHeart />
                              </div>
                         </div>

                         <div className='content'>
                              <div className='content_top'>
                                   <Link to='/'>
                                        Your private cottage in the wood at the
                                        Trailhead
                                   </Link>

                                   <div className='provision'>
                                        <span>2 Bathrooms</span>
                                        <span>1 Bath</span>
                                        <span>4 Sleeps</span>
                                   </div>
                              </div>

                              <div className='content_bottom'>
                                   <span>No reviews yet</span>
                                   <span>Free wifi</span>
                              </div>
                         </div>
                    </div>

                    <div className='right_result'>
                         <h2>$250</h2>
                         <span>vrbo</span>
                         <button>View Deal</button>
                    </div>
               </StyledResult>
          </Link>
     );
};

export default SearchResult;
