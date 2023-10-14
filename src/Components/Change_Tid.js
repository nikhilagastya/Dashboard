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
    let lis=['21BD1A664P','21BD1A664W','21BD1A05A4',
    '21BD1A058T',
    '20BD1A1244',
    '20BD1A1280',
    '22BD1A059N',
    '22BD5A0539',
    '21BD1A660D',
    '22BD1A057G',
    '22BD1A050K',
    '21BD1A053X',
    '22BD1A05BN',
    '22BD1A051Q',
    '21BD1A6702',
    '22BD1A054Y',
    '21BD1A051F',
    '21BD1A0660E',
    '21BD1A1282',
    '22BD1A057K',
    '20BD1A66D1',
    '20BD1A1217',
    '22BD1A05C2',
    '22BD1A0528',
    '20BD1A05DE',
    '21BD1A662N',
    '21BD1A663N',
    '20BD1A6751',
    '20BD1A05DV',
    '22BD1A1217',
    '21BD1A051N',
    '22BD1A661B',
    '21BD1A0504',
    '22BD1A054U',
    '22BD1A05C6',
    '21BD1A054T',
    '20BD1A0504',
    '20BD1A050J',
    '21BD1A056G',
    '22BD1A660F',
    '21BD1A6760',
    '20BD1A051H',
    '22BD1A056P',
    '20BD1A6690',
    '22BD1A05CM',
    '20BD1A05DT',
    '21BD1A051G',
    '20BD1A0558',
    '21BD1A6757',
    '22BD1A056X',
    '21BD1A058B',
    '21BD1A0661Q',
    '20BD1A1229',
    '20BD1A0532',
    '22BD1A0549',
    '21BD1A663J',
    '22BD1A660V',
    '21BD1A664E',
    '22BD1A6760',
    '20BD1A05A7',
    '22BD5A6612',
    '21BD1A06608',
    '20BD1A0562',
    '21BD1A05AF',
    '21BD1A6712',
    '22BD1A6639',
    '22BD1A6713',
    '20BD1A05AP',
    '22BD1A661E',
    '21BD1A6713',
    '20BD1A05DH',
    '20BD1A054A',
    '20BD1A0543',
    '21BD1A663Q',
    '22BD1A661Z',
    '20BD1A052U',
    '21BD1A06607',
    '22BD1A6717',
    '20BD1A059N',
    '20BD1A05BN',
    '21BD1A1224',
    '21BD1A661L',
    '22BD1A056D',
    '21BD1A6707',
    '22BD1A05CV',
    '20BD1A05A9',
    '21BD1A059M',
    '21BD1A057K',
    '21BD1A6747',
    '20BD1A05DB',
    '20BD1A0539',
    '22BD1A1225',
    '21BD1A051W',
    '20BD1A05CM',
    '20BD1A050H',
    '20BD1A06624',
    '21BD1A051V',
    '22BD1A0563',
    '20BD1A66A6',
    '20BD1A058H',
    '22BD1A053M',
    '21BD1A1232',
    '20BD1A6687',
    '20BD1A06C5',
    '20BD1A05CW',
    '20BD1A053V',
    '22BD1A054R',
    '21BD1A1250',
    '22BD1A050W',
    '21BD1A6725',
    '22BD1A6718',
    '20BD1A05CN',
    '20BD1A6644',
    '20BD1A05D7',
    '22BD1A1263',
    '22BD1A1265',
    '22BD1A056T',
    '21BD1A051A',
    '22BD1A050X',
    '21BD1A056J',
    '22BD1A12B6',
    '22BD1A056L',
    '21BD1A051X',
    '20BD1A6656',
    '20BD1A0588',
    '20BD1A1220',
    '21BD1A0583',
    '21BD1A059L',
    '20BD1A6619',
    '21BD1A12B4',
    '20BD1A05B1',
    '21BD1A059K',
    '22BD1A1216',
    '21BD1A0594',
    '21BD1A056D',
    '22BD1A66K1',
    '22BD1A053U',
    '21BD1A05D2',
    '20BD1A1240',
    '20BD1A6747',
    '22BD1A1215',
    '21BD1A05CX',
    '22BD1A665Y',
    '21BD1A056B',
    '22BD1A059W',
    '21BD1A05BJ',
    '20BD1A0587',
    '21BD1A056A',
    '21BD1A059R',
    '20BD1A059Q',
    '22BD1A1292',
    '21BD1A05AH',
    '20BD1A0501',
    '21BD1A053H',
    '21BD1A053F',
    '22BD1A05DL',
    '22BD1A664J',
    '21BD1A055R',
    '21BD1A662G',
    '22BD1A1250',
    '21BD1A6607',
    '21BD1A662X',
    '22BD1A6710',
    '21BD1A6739',
    '21BD1A12A4',
    '21BD1A6751',
    '20BD1A052F',
    '21BD1A055V',
    '21BD1A662W',
    '22BD1A12B8',
    '20BD1A6719',
    '20BD1A05AC',
    '20BD1A058E',
    '20BD1A058G',
    '20BD1A66B4',
    '20BD1A6735',
    '21BD1A0581',
    '21BD1A662J',
    '22BD1A051N',
    '20BD1A052B',
    '20BD1A052J',
    '21BD1A6608',
    '22BD1A0561',
    '22BD1A050H',
    '22BD1A05DX',
    '20BD1A05DN',
    '21BD1A6648',
    '21BD1A6716',
    '21BD1A660F',
    '21BD1A050T',
    '21BD1a1244']
    
    for(let i=0;i<lis.length;i++){
    axios.post('https://pass-server-o7gu.onrender.com/put_council_perf', { rno:lis[i], t_id: "Council/Volunteers/Performers" })
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

