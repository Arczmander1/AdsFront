import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';
import {SearchContext} from "../../contexts/search.context";

import './Map.css';
import 'leaflet/dist/leaflet.css';

export const Map = () => {

    const {search} = useContext(SearchContext);

    useEffect(()=>{
        console.log('make request to search for', search)
    }, [search]);

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[53.1226974, 17.9958792]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[53.1226974, 17.9958792]}>
                    <Popup>
                        <h2>Wyspa Młyńska</h2>
                        <p>Warto zobaczyć</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
};
