import { styled } from 'styled-components';

const StyledBookingDescription = styled.div`
     /* padding: 1rem; */
     display: flex;
     flex-direction: column;
     gap: 20px;
     padding: 2rem;

     h2 {
          font-size: 17px;
          color: var(--tertiary-gray-800);
     }

     p {
          line-height: 25px;

          font-size: 13px;
     }
`;

const BookingDescription = () => {
     return (
          <StyledBookingDescription>
               <h2>Description</h2>

               <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore soluta libero dicta ad enim voluptate quis assumenda
                    amet tempore neque! Praesentium rem, a tenetur quod,
                    inventore fuga odio alias quibusdam magnam obcaecati
                    corrupti eveniet. Assumenda unde minus corrupti provident
                    mollitia error blanditiis, cupiditate laborum quas sunt
                    numquam. Culpa assumenda ab explicabo mollitia fuga id ea.
                    Nemo architecto voluptatibus saepe eaque neque, consequuntur
                    amet obcaecati natus fugit ab sequi vel, ipsam commodi,
                    explicabo dolore tenetur laudantium tempore non rerum sed.
                    Labore commodi quod quasi nesciunt dolores ex dolorem
                    reprehenderit id facilis expedita, veniam quisquam unde
                    officia. Ducimus sunt, nihil voluptate exercitationem,
                    cumque, sed earum ipsam dolore ab alias voluptatibus
                    provident inventore. Nulla nisi veniam doloribus maxime
                    commodi accusantium nam aspernatur ducimus repellat
                    reprehenderit, officia, quisquam saepe neque ipsa
                    perferendis perspiciatis dolorem consequatur ipsam!
                    Aspernatur numquam neque, aut consequuntur quae inventore
                    itaque animi illum dolorum quis. Odio, ratione quasi!
                    Aliquam unde maxime sit sunt magnam odio officia harum quasi
                    consequuntur. Sequi, soluta! Error exercitationem minus
                    distinctio, suscipit laboriosam, veritatis doloremque
                    architecto, sint itaque quae placeat ullam obcaecati
                    quibusdam? Vero et ad nisi suscipit, officia fugiat totam
                    expedita dolores iste sequi nam laborum, quo tenetur porro
                    molestiae eaque incidunt nulla vitae, saepe cum.
               </p>
          </StyledBookingDescription>
     );
};

export default BookingDescription;
