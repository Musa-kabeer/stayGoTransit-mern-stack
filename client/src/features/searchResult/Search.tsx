import styled from 'styled-components';
import SearchFilter from '../../ui/SearchFilter';
import SearchResult from './SearchResult';
import { useSearchRooms } from './useSearchRooms';
// import { Room } from '../../helpers/interfaces';

const StyledSearchResult = styled.div`
     display: flex;
     height: 100%;

     .searchResults {
          flex: 5;
          padding: 1.5rem;

          display: flex;
          flex-direction: column;
          gap: 20px;
          max-height: 100%;
          overflow-y: auto;
     }
`;

interface Room {
     name: string;
     address: string;
     amenities: string[];
     description: string;
     hotelId: string;
     hotelName: string;
     id: string;
     images: string[];
     location: [number, number];
     price: number;
     roomId: string;
     shortDescription: string;
     state: string;
     town: string;
     _id: string;
}

const Search = () => {
     const { status, rooms } = useSearchRooms();

     if (status === 'pending') {
          return 'Loading...';
     }

     if (status === 'error') {
          return 'Connection Error!';
     }

     return (
          <>
               <StyledSearchResult>
                    <SearchFilter />

                    <div className='searchResults'>
                         {rooms.map((room: Room, i: number, len) => (
                              <SearchResult
                                   key={i + 1}
                                   image={room.images[0]}
                                   name={room.name}
                                   price={room.price}
                                   amenity_one={room.amenities[0]}
                                   amenity_two={room.amenities[1]}
                                   len={len.length}
                                   address={room.address}
                                   to={`/hotels/booking/${room.roomId}`}
                              />
                         ))}
                    </div>
               </StyledSearchResult>
          </>
     );
};

export default Search;
