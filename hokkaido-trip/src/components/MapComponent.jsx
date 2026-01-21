import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});
L.Marker.prototype.options.icon = DefaultIcon;

function MapController({ selectedLocation, schedule }) {
    const map = useMap();

    useEffect(() => {
        if (selectedLocation && selectedLocation.coords) {
            // 飛過去時稍微拉近一點，讓使用者看清楚位置
            map.flyTo(selectedLocation.coords, 15, {
                duration: 1.2,
                easeLinearity: 0.25
            });
        } else if (schedule.length > 0) {
            const validPoints = schedule.filter(s => s.coords).map(s => s.coords);
            if (validPoints.length > 0) {
                const bounds = L.latLngBounds(validPoints);
                map.fitBounds(bounds, { padding: [50, 50] });
            }
        }
    }, [selectedLocation, schedule, map]);

    return null;
}

const MapComponent = ({ schedule, selectedLocation }) => {
    const validPoints = schedule
        .filter(item => item.coords)
        .map(item => ({ ...item, position: item.coords }));
    
    const positions = validPoints.map(p => p.position);
    const center = positions.length > 0 ? positions[0] : [43.5, 142.5];

    return (
        <MapContainer 
            center={center} 
            zoom={8} 
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true} // 開啟滑鼠滾輪縮放
            zoomControl={true}     // 開啟左上角 + - 按鈕
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MapController selectedLocation={selectedLocation} schedule={schedule} />

            {validPoints.map((point, idx) => (
                <Marker key={idx} position={point.position}>
                    <Popup>
                        <div className="text-center font-sans">
                            <strong className="block text-sm text-slate-900 mb-1">{point.activity}</strong>
                            <span className="text-xs text-slate-500">{point.desc}</span>
                        </div>
                    </Popup>
                </Marker>
            ))}

            {positions.length > 1 && (
                <Polyline positions={positions} color="#0ea5e9" weight={4} opacity={0.7} dashArray="8, 8" />
            )}
        </MapContainer>
    );
};

export default MapComponent;
