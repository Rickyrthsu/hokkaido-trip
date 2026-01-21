import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, Tooltip } from 'react-leaflet';
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

// 🔴 紅色戰略圖釘 (使用 CSS Filter 變色)
const RedIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    className: 'hue-rotate-180 brightness-75 contrast-200' // 讓藍色變紅色的魔法
});

function MapController({ selectedLocation, schedule, tempMarker }) {
    const map = useMap();

    useEffect(() => {
        // 優先處理戰略圖釘的移動
        if (tempMarker) {
            map.flyTo(tempMarker.coords, 16, {
                duration: 1.0
            });
        }
        else if (selectedLocation && selectedLocation.coords) {
            map.flyTo(selectedLocation.coords, 15, {
                duration: 1.2
            });
        } else if (schedule.length > 0) {
            const validPoints = schedule.filter(s => s.coords).map(s => s.coords);
            if (validPoints.length > 0) {
                const bounds = L.latLngBounds(validPoints);
                map.fitBounds(bounds, { padding: [50, 50] });
            }
        }
    }, [selectedLocation, schedule, map, tempMarker]);

    return null;
}

const MapComponent = ({ schedule, selectedLocation, tempMarker }) => {
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
            scrollWheelZoom={true}
            zoomControl={true}
        >
            <TileLayer
                attribution='© OpenStreetMap'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MapController selectedLocation={selectedLocation} schedule={schedule} tempMarker={tempMarker} />

            {/* 一般行程圖釘 */}
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

            {/* 🔴 戰略地圖圖釘 (15秒自動消失) */}
            {tempMarker && (
                <Marker position={tempMarker.coords} icon={RedIcon} zIndexOffset={1000}>
                    <Tooltip direction="right" permanent offset={[10, -25]} className="font-bold text-red-600 bg-white border border-red-200 shadow-md">
                        {tempMarker.label}
                    </Tooltip>
                </Marker>
            )}

            {positions.length > 1 && (
                <Polyline positions={positions} color="#0ea5e9" weight={4} opacity={0.7} dashArray="8, 8" />
            )}
        </MapContainer>
    );
};

export default MapComponent;
