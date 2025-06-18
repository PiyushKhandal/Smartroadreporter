import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import LocationPicker from "./component/MapLocation";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

import "./App.css";

function Home() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !location) {
      setMessage("कृपया इमेज और लोकेशन दोनों दें");
      return;
    }

   const formData = new FormData();
formData.append("image", image);
formData.append("location", location);
formData.append("severity", "medium"); // hardcoded for now
formData.append("detected", "true");
 // 👈 added for backend requirement

    try {
      const res = await fetch("http://localhost:5000/api/reports/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("रिपोर्ट सफलतापूर्वक भेजी गई!");
        setImage(null);
        setLocation("");
      } else {
        setMessage(data.error || "रिपोर्ट अपलोड में त्रुटि");
      }
    } catch (err) {
      setMessage("त्रुटि: " + err.message);
    }
  };

  return (
    <>
      <main>
        <h2>Smart Road Reporter</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>इमेज अपलोड करें:</label><br />
            <input type="file" onChange={handleImageChange} />
          </div>

          <LocationPicker setLocation={setLocation} />

          <div>
            <label>या लोकेशन मैनुअली डालें (address या lat,long):</label><br />
            <input
              type="text"
              value={location}
              placeholder="उदाहरण: 26.846299382609306,75.81836308534214 या कोई पता"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button type="submit">रिपोर्ट भेजें</button>
        </form>

        {message && <p className="message">{message}</p>}
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <nav style={{ textAlign: "center", marginTop: "10px" }}>
          <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
          <Link to="/login" style={{ margin: "0 15px" }}>Login</Link>
          <Link to="/signup" style={{ margin: "0 15px" }}>Signup</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
