
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // For CSS styling

function Dashboard() {
  const [passCounts, setPassCounts] = useState({});

  useEffect(() => {
    // Fetch pass counts from the backend API
    axios.get('https://pass-server-o7gu.onrender.com/countYear')
      .then(response => {
        console.log(response.data)
        setPassCounts(response.data);

      })
      .catch(error => {
        console.error('Error fetching pass counts:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Pass Counts by Year</h1>
      <div className="year-count">
        <div className="year">
          <h2>1st Year</h2>
          <p>{passCounts.y1 ||"nan"}</p>
        </div>
        <div className="year">
          <h2>2nd Year</h2>
          <p>{passCounts.y2 || "nan"}</p>
        </div>
        <div className="year">
          <h2>3rd Year</h2>
          <p>{passCounts.y3 || "nan"}</p>
        </div>
        <div className="year">
          <h2>4th Year</h2>
          <p>{passCounts.y4 || "nan"}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
