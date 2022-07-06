import './App.css';
import React, { useState } from 'react';


function App() {
  const [selectedColor, setSelectedColor] = useState("amarillo");

  return (
    <div className="semaforo">
      <div 
        onClick={() => setSelectedColor("rojo")}
        className={
          "color rojo" + (selectedColor === "rojo" ? " glow" : "")
        }>
      </div>
      <div 
        onClick={() => setSelectedColor("amarillo")}
        className={
          "color amarillo" + (selectedColor === "amarillo" ? " glow" : "")
        }>
      </div>
      <div 
        onClick={() => setSelectedColor("verde")}
        className={
          "color verde" + (selectedColor === "verde" ? " glow" : "")
        }>
      </div>
    </div>
  );
};

export default App;
