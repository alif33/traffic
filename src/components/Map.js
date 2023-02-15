// import GoogleMapReact from 'google-map-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Link } from 'react-router-dom';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {

    const position = [51.505, -0.09]

    return (
        <div className="hero-section">
            <div className="map-box w-75">
                <div id="map" className="map-container">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        {/* <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup> */}
                        </Marker>
                    </MapContainer>
                </div>
             </div>
             <div id="mobile-menu" className="mobile-nav-menu">
                 <ul className="mobile-nav">
                     <li><Link>Traffic Information</Link></li>
                     <li><Link>Maps</Link></li>
                 </ul>
             </div>
             <div className="parallax"></div>
         </div>
    );
}