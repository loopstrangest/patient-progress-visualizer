import React, {useState,useEffect} from 'react';
import GlobalStyle from "./components/GlobalStyle";
import patientData from "./MH Score Visualizer Data.json"
import LineChartDisplay from "./components/LineChart";

//patientData['newField'] = patientData['Timestamp'].getTime();
patientData.forEach(entry => {
  var d = new Date(entry['Timestamp']);
  entry["Date"] = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();
  entry["Unixtime"] = d.getTime();
});

var defaultPatientData = patientData.filter(data => data["Patient Name"] == "Lianna");

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Patient Progress Visualizer</h1>
      <h2>A simple visual summary of your patients' progress</h2>
      <div className="LineChartContainer" style={{width: '100%', height: '500px'}}>
        <LineChartDisplay data={defaultPatientData}/>
      </div>
      

    </div>
  );
}

export default App;