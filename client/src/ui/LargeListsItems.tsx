import styled from 'styled-components';

const StyledList = styled.div`
     display: flex;
     background: var(--primary-gray-100);
     height: 110px;
     border-radius: var(--border-radius);
     text-decoration: none;

     img {
          flex: 1;
          height: 100%;
          object-fit: cover;
          width: 100%;
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
     }

     .content {
          flex: 1;
          margin: 10px;

          .header {
               font-size: 0.8rem;
               text-align: left;
               line-height: 23px;
               color: black;
          }

          span {
               font-weight: 200;
          }
     }
`;

const LargeListsItems = () => {
     return (
          <StyledList>
               <img
                    src='https://www.momondo.com/rimg/himg/51/a6/97/ice-136690-71847437_3XL-805582.jpg?width=968&height=968&crop=true'
                    alt=''
               />

               <div className='content'>
                    <h1 className='header'>
                         <span>RENTAL IN</span>
                         <br />
                         NEW YORK
                    </h1>
               </div>
          </StyledList>
     );
};

export default LargeListsItems;
