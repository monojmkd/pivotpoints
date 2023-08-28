import React, { useState } from 'react';
import './App.css';

function App() {
  const [highPrice, setHighPrice] = useState('');
  const [lowPrice, setLowPrice] = useState('');
  const [closingPrice, setClosingPrice] = useState('');
  const [pivotPoint, setPivotPoint] = useState('');
  const [supportLevels, setSupportLevels] = useState([]);
  const [resistanceLevels, setResistanceLevels] = useState([]);

  const calculatePivotPoints = () => {
    const pivot = (Number(highPrice) + Number(lowPrice) + Number(closingPrice)) / 3;
    const support1 = 2 * pivot - Number(highPrice);
    const support2 = pivot - (Number(highPrice) - Number(lowPrice));
    const support3 = Number(lowPrice) - 2 * (Number(highPrice) - pivot);
    const resistance1 = 2 * pivot - Number(lowPrice);
    const resistance2 = pivot + (Number(highPrice) - Number(lowPrice));
    const resistance3 = Number(highPrice) + 2 * (pivot - Number(lowPrice));

    setPivotPoint(pivot.toFixed(2));
    setSupportLevels([support1.toFixed(2), support2.toFixed(2), support3.toFixed(2)]);
    setResistanceLevels([resistance1.toFixed(2), resistance2.toFixed(2), resistance3.toFixed(2)]);
  };

  return (
    <div className="App">
      <h1 style={{textDecorationLine: 'underline'}}>Pivot Point Calculator</h1>
      <div>
        <label>High Price: </label>
        <input
          type="number"
          value={highPrice}
          onChange={(e) => setHighPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Low Price: </label>
        <input
          type="number"
          value={lowPrice}
          onChange={(e) => setLowPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Closing Price: </label>
        <input
          type="number"
          value={closingPrice}
          onChange={(e) => setClosingPrice(e.target.value)}
        />
      </div>
      <button onClick={calculatePivotPoints}>Calculate</button>
      {pivotPoint && (
        <div style={{fontWeight:"600"}}>
          <h2 style={{fontSize:"27px"}}>Calculated Levels</h2>
          <p style={{fontSize:"18px"}}>Pivot Point: {pivotPoint}</p>
          <p style={{color:"darkgreen",fontSize:"18px"}}>Support Levels: {supportLevels.join(', ')}</p>
          <p style={{color:"red",fontSize:"18px"}}>Resistance Levels: {resistanceLevels.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
