import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/showSchools").then((res) => {
      setSchools(res.data);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>School List</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>School Name</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}>State</th>
            <th style={styles.th}>Image</th>
          </tr>
        </thead>

        <tbody>
          {schools.map((school) => (
            <tr key={school.id} style={styles.tr}>
              <td style={styles.td}>{school.id}</td>
              <td style={styles.td}>{school.name}</td>
              <td style={styles.td}>{school.city}</td>
              <td style={styles.td}>{school.state}</td>
              <td style={styles.td}>
                <img
                  src={`http://localhost:3000/schoolImages/${school.image}`}
                  alt="School"
                  style={styles.image}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    margin: "30px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  th: {
    padding: "12px",
    backgroundColor: "#2d6cdf",
    color: "white",
    border: "1px solid #ddd",
  },
  tr: {
    backgroundColor: "#f9f9f9",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  image: {
    width: "100px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "5px",
  },
};

export default ShowSchools;
