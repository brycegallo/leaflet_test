import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet";

export default function App() {
  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "pop up 3"
    },
  ];

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}