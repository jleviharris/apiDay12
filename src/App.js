import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [statusClass, setStatusClass] = useState("base");
  const [cordClass, setCordClass] = useState("base");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatusClass("active");
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setStatusClass("base");
          setCordClass("active");
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  return (
    <div className="App">
      <div className="box">
        <button className="btn" onClick={getLocation}>
          Get Location{" "}
        </button>
        <h1 className={cordClass}>Coordinates</h1>
        <p className={statusClass}>{status}</p>
        {lat && <p className="lat">Latitude: {lat}</p>}
        {lng && <p className="lng">Longitude: {lng}</p>}
      </div>
    </div>
  );
}

export default App;
