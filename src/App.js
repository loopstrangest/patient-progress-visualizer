import React, {useState,useEffect} from 'react';
import GlobalStyle from "./components/GlobalStyle";
import dataset from "./MH Score Visualizer Data.json"
import LineChartDisplay from "./components/LineChart";
import Buttons from './components/ButtonGroup';

//Get formatted datetimes from Timestamp for chart implementation
dataset.forEach(entry => {
  var d = new Date(entry['Timestamp']);
  entry["Date"] = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();
  entry["Unixtime"] = d.getTime();
});

//Get list of unique patients
var patientList = dataset.map(data => data['Patient Name'])
  .filter((value, index, self) => self.indexOf(value) === index);

var defaultPatient = patientList[0];




function App() {
  const [chartDataset] = useState(dataset);
  const [patient, setPatient] = useState(patientList[0]);
  const [patientData, setPatientData] = useState(chartDataset.filter(
  data => data["Patient Name"] == patient));
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Patient Progress Visualizer</h1>
      <h2>A simple visual summary of your patients' progress</h2>
      <div className="LineChartContainer" style={{width: '100%', height: '500px'}}>
        <LineChartDisplay data={patientData}/>
      </div>
      <Buttons chartDataset={chartDataset}
      setPatient={setPatient} setPatientData={setPatientData}/>
    </div>
  );
}

export default App;