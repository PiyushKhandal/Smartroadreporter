import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 भारत सरकार - Smart Road Reporter</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#e0f2f1",
  color: "#004d40",
  textAlign: "center",
  padding: "10px 0",
  fontWeight: "500",
  boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
};

export default Footer;
