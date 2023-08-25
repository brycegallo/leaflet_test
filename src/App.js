import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
// import cluster from 'cluster';

export default function App() {
  // markers
  const markers = [
    {
      geocode: [29.72556943573647, -95.39052521099289],
      popUp: "Liberty, Meekness & Innocence"
    },
    {
      geocode: [15.508401955627711, -88.05887342959872],
      popUp: "Rotulo Coca-Cola"
    },
    {
      geocode: [40.75450483482303, -73.95631869815078],
      popUp: "Our first dance"
    },
    {
      geocode: [-27.189625103018596, -109.4425747839181],
      popUp: "Where we'll watch the sunset"
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("./img/icon.png"),
    iconSize: [30, 30]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (
    <MapContainer center={[15.5039, -88.0139]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <TileLayer
        attribution='Stamen Watercolor'
        url='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
      /> */}
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map(marker => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
          ))
        }
      </MarkerClusterGroup>
    </MapContainer>
  );
}