import React from "react";

const navLinkStyle = {
  color: "#a5d6a7",
  marginLeft: 20,
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
};

const Header = () => {
  return (
    <header style={{ backgroundColor: "#004d40", color: "#fff", padding: "15px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "auto",
          padding: "0 20px",
          justifyContent: "space-between",
        }}
      >
        {/* Left side: Logo + Title */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.shutterstock.com/image-vector/ashok-pillar-symbol-icon-black-600nw-2422191035.jpg"
            alt="Ashoka Pillar Symbol"
            style={{ height: "50px", marginRight: "15px" }}
          />
          <div style={{ fontWeight: "bold", fontSize: "1.5rem", letterSpacing: "2px" }}>
            🚧 भारत सरकार - Smart Road Reporter
          </div>
        </div>

        {/* Right side: Navigation */}
        <nav style={{ display: "flex", marginLeft: "auto" }}>
          <a href="#report" style={navLinkStyle}>रिपोर्ट करें</a>
          <a href="#submitted" style={navLinkStyle}>रिपोर्ट्स</a>
          <a href="https://india.gov.in" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>भारत सरकार</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
