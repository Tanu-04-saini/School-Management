import React, { useState } from "react";
import axios from "axios";

function AddSchool() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append("image", image);

    try {
      const res = await axios.post("http://localhost:3000/addSchool", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      

      alert(res.data.status);
    } catch (err) {
      alert("Error submitting form");
      console.log(err);
    }
  };

  // Center container
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f8f8f8",
  };

  // Inner form box
  const boxStyle = {
    width: "390px",
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  // Inputs
  const inputStyle = {
    width: "90%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    background: "#4a90e2",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ marginBottom: "20px" }}>Add School</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="School Name"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="contact"
            placeholder="Contact"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="email_id"
            placeholder="Email"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="file"
            onChange={handleImage}
            style={{ marginBottom: "20px" }}
          />

          <button type="submit" style={buttonStyle}>
            Add School
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSchool;
