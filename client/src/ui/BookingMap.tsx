import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Booking } from '../helpers/interfaces';

const BookingMap: FC<Booking> = ({ location }) => {
     return (
          <div className='map'>
               <MapContainer
                    center={location}
                    zoom={13}
                    scrollWheelZoom={false}
                    className='map'
               >
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={location}>
                         <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                         </Popup>
                    </Marker>
               </MapContainer>
          </div>
     );
};

export default BookingMap;
// 6.4348197, 3.4225465;
