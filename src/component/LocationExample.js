import React, { useState } from "react";

const LocationExample = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null, error: null });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation({ ...location, error: "Geolocation is not supported by your browser" });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({ ...location, error: error.message });
        }
      );
    }
  };

  return (
    <div>
      <h2>User Location Example</h2>
      <button onClick={getLocation}>Get My Location</button>
      {location.latitude && location.longitude && (
        <p>
          Latitude: {location.latitude} <br />
          Longitude: {location.longitude}
        </p>
      )}
      {location.error && <p style={{ color: "red" }}>Error: {location.error}</p>}
    </div>
  );
};

export default LocationExample;
