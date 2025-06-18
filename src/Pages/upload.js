import React, { useState } from 'react';

function Upload() {
  const [image, setImage] = useState(null);
  const [severity, setSeverity] = useState("low");

  const handleUpload = async () => {
    if (!image) {
      console.error("❌ Please select an image before uploading.");
      alert("Please select an image before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("severity", severity);
    formData.append("detected", "false");
    formData.append("location", "Jaipur"); // ✅ Dummy location for now

    try {
      const res = await fetch("http://localhost:5000/api/reports/upload", {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log("✅ Success:", data);
      alert("Upload successful!");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <h2>Upload Road Damage</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <select onChange={(e) => setSeverity(e.target.value)} value={severity}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;
