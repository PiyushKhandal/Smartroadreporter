import React, { useState } from 'react';

const ReportForm = () => {
  const [image, setImage] = useState(null);
  const [severity, setSeverity] = useState('');
  const [detected, setDetected] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !severity) {
      setStatus('❌ Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('severity', severity);
    formData.append('detected', detected);

    try {
      const res = await fetch('http://localhost:5000/api/reports/upload', {
        method: 'POST',
        body: formData
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('✅ Report uploaded successfully!');
        console.log(result);
      } else {
        setStatus('❌ ' + result.error);
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to fetch');
    }
  };

  return (
    <div>
      <h2>📸 Road Damage Reporter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Image:</label><br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        </div><br />

        <div>
          <label>Severity:</label><br />
          <select value={severity} onChange={(e) => setSeverity(e.target.value)} required>
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div><br />

        <div>
          <label>Detected:</label><br />
          <input type="checkbox" checked={detected} onChange={(e) => setDetected(e.target.checked)} />
        </div><br />

        <button type="submit">Submit</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default ReportForm;

