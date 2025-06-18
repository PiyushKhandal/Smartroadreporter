import React, { useState } from "react";

const LocationPicker = ({ setLocation }) => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation supported नहीं है");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;

        try {
          const res = await fetch(url);
          const data = await res.json();

          if (data.error) {
            setError("पता नहीं मिला");
            return;
          }

          setAddress(data.display_name);
          setLocation(data.display_name);
        } catch {
          setError("पता निकालने में समस्या आई");
        }
      },
      () => {
        setError("Location access denied");
      },
      {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <button type="button" onClick={getLocation} style={{ padding: "8px 15px", cursor: "pointer" }}>
        📍 मेरी लोकेशन लें (Address के साथ)
      </button>

      {address && <p><b>पता:</b> {address}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LocationPicker;
