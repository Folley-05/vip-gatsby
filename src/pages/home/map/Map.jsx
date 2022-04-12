import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import './map.css'

function Map() {
    useEffect(() => {
    }, [])

    return (
        <div className="map">
            <div className="wrapper">
                <h1 className='text-orange'>Localisation</h1>
                <div className="leaflet-container">
                    <MapContainer center={[3.950875,11.540238]} zoom={16}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[3.950875,11.540238]}>
                            <Popup>
                                Stade Omnisport Olembe. <br /> Bienvenue A Yaounde.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Map