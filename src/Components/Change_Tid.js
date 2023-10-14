import React, { useState } from 'react';
import axios from 'axios';

export default function Change_Tid() {
  const [roll, setRoll] = useState('');
  const [personData, setPersonData] = useState(null);
  const [newTid, setNewTid] = useState('');

  const handleRollChange = (e) => {
    setRoll(e.target.value);
  };

  const fetchPersonData = () => {
    // Fetch data for the person with the provided roll number
    axios.post(`https://pass-server-o7gu.onrender.com/get_all_data`, { rno:roll })
      .then((response) => {
        setPersonData(response.data.info[0]);
        console.log(response.data)
        
      })
      .catch((error) => {
        console.error('Error fetching person data:', error);
      });
  };

  const handleTidChange = (e) => {
    setNewTid(e.target.value);
  };

  const updateTid = () => {
    // Send a request to update the tid on the backend
    axios.post('https://pass-server-o7gu.onrender.com/put_id', { rno:roll, t_id: newTid })
      .then((response) => {
        console.log('Tid updated successfully');
        // Optionally, you can update the personData with the new tid here
      })
      .catch((error) => {
        console.error('Error updating tid:', error);
      });
  };

  const bulk_update = () => {
    // Send a request to update the tid on the backend
    let lis=["20BD1A0501","20BD1A050J"]
    for(let i=0;i<lis.length;i++){
    axios.post('https://pass-server-o7gu.onrender.com/put_council_perf', { rno:lis[i], t_id: "Council/Volunteers" })
      .then((response) => {
        console.log(lis[i]+' Tid updated successfully');
        // Optionally, you can update the personData with the new tid here
      })
      .catch((error) => {
        console.error('Error updating tid:', error);
      });
    }
  };

  return (
    <div>
      <button onClick={bulk_update}>Bulk update</button>
      <h1>Change Tid</h1>
      <div>

        <label>Enter Roll Number: </label>
        <input type="text" value={roll} onChange={handleRollChange} />
        <button onClick={fetchPersonData}>Fetch Data</button>
      </div>

      {personData && (
        <div>
          <h2>Name: {personData.Name}</h2>
          <p>Roll Number: {personData.Rollno}</p>
          <p>phno: {personData.Phoneno}</p>
          <p>Year: {personData.Year}</p>
          <p>TransactionId: {personData.TransactionId}</p>
          <p>Entry: {String(personData.Entry)}</p>
          <p>Year: {personData.Year}</p>
          <label>Change Tid: </label>
          <input type="text" value={newTid} onChange={handleTidChange} />
          <button onClick={updateTid}>Update Tid</button>
        </div>
      )}
    </div>
  );
}

