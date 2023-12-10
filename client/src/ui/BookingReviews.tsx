import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledReviews = styled.div`
     border: 1px solid #c0c0c0d2;
     padding: 2rem;
     display: flex;
     flex-direction: column;
     gap: 25px;

     h2 {
          font-size: 17px;
          color: var(--tertiary-gray-800);
     }

     a {
          text-decoration: underline;
     }

     .review_lists {
          display: flex;
          flex-direction: column;
          gap: 4rem;

          li:last-child {
               border: none;
          }
     }

     .review_list {
          padding: 20px;
          display: flex;
          gap: 20px;
          border-bottom: 1px solid #d2d2d2c8;

          .rate {
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 17px;
               width: 45px;
               height: 40px;
               background: #f0f0f081;
               border: 1px solid #d3d3d36e;
          }

          .review_container {
               display: flex;
               flex-direction: column;
               gap: 20px;

               .review {
                    font-size: 13px;
                    line-height: 20px;
                    color: #282828eb;
               }

               .review_date {
                    font-size: 14px;
                    color: #868585eb;
               }
          }
     }
`;

const BookingReviews = () => {
     return (
          <StyledReviews>
               <h2>User Reviews</h2>

               <ul className='review_lists'>
                    <li className='review_list'>
                         <div>
                              <div className='rate'>9.1</div>
                         </div>

                         <div className='review_container'>
                              <p className='review'>
                                   Lorem ipsum dolor sit amet consectetur,
                                   adipisicing elit. Natus consectetur nobis
                                   blanditiis, placeat id odio aliquam. Nostrum
                                   ea architecto natus neque? Doloribus, nam
                                   porro similique illo amet officiis sapiente
                                   iure.
                              </p>

                              <p className='review_date'>
                                   <time>06/12/2016</time> by Verified Guest
                              </p>
                         </div>
                    </li>

                    <li className='review_list'>
                         <div>
                              <div className='rate'>9.1</div>
                         </div>

                         <div className='review_container'>
                              <p className='review'>
                                   Lorem ipsum dolor sit amet consectetur,
                                   adipisicing elit. Natus consectetur nobis
                                   blanditiis, placeat id odio aliquam. Nostrum
                                   ea architecto natus neque? Doloribus, nam
                                   porro similique illo amet officiis sapiente
                                   iure.
                              </p>

                              <p className='review_date'>
                                   <time>06/12/2016</time> by Verified Guest
                              </p>
                         </div>
                    </li>

                    <li className='review_list'>
                         <div>
                              <div className='rate'>9.1</div>
                         </div>

                         <div className='review_container'>
                              <p className='review'>
                                   Lorem ipsum dolor sit amet consectetur,
                                   adipisicing elit. Natus consectetur nobis
                                   blanditiis, placeat id odio aliquam. Nostrum
                                   ea architecto natus neque? Doloribus, nam
                                   porro similique illo amet officiis sapiente
                                   iure.
                              </p>

                              <p className='review_date'>
                                   <time>06/12/2016</time> by Verified Guest
                              </p>
                         </div>
                    </li>

                    <li className='review_list'>
                         <div>
                              <div className='rate'>9.1</div>
                         </div>

                         <div className='review_container'>
                              <p className='review'>
                                   Lorem ipsum dolor sit amet consectetur,
                                   adipisicing elit. Natus consectetur nobis
                                   blanditiis, placeat id odio aliquam. Nostrum
                                   ea architecto natus neque? Doloribus, nam
                                   porro similique illo amet officiis sapiente
                                   iure.
                              </p>

                              <p className='review_date'>
                                   <time>06/12/2016</time> by Verified Guest
                              </p>
                         </div>
                    </li>
               </ul>

               <Link to='/'>Read More (56)</Link>
          </StyledReviews>
     );
};

export default BookingReviews;
