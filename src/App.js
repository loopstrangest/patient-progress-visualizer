import React, {useState, useCallback} from 'react';
import GlobalStyle from "./components/GlobalStyle";
import dataset from "./MH Score Visualizer Data.json"
import LineChartDisplay from "./components/LineChart";
import LineChartTitle from "./components/LineChartTitle";
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

function App() {
  const [chartDataset] = useState(dataset);
  const [patient, setPatient] = useState(patientList[0]);
  const [patientData, setPatientData] = useState(chartDataset.filter(
  data => data["Patient Name"] == patient));
  const [opacity, setOpacity] = useState({
    "GAD-7 Score": 1,
    "PHQ-9 Score": 1
  });
  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({
      "GAD-7 Score": 0.5,
      "PHQ-9 Score": 0.5,
      [dataKey]: 1});
    },
    [opacity, setOpacity]
  );

const handleMouseLeave = useCallback(
   (o) => {
     const { dataKey } = o;
     setOpacity({
      "GAD-7 Score": 1,
      "PHQ-9 Score": 1})
   },
   [opacity, setOpacity]
 );
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Patient Progress Visualizer</h1>
      <h2>View the progress of your patients' mental health scores</h2>
      <div className="LineChartContainer" style={{width: '100%', height: '500px'}}>
        <LineChartTitle patientName={patient}/>
        <LineChartDisplay
        data={patientData}
        opacity={opacity}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}/>
      </div>
      <Buttons chartDataset={chartDataset}
      setPatient={setPatient} setPatientData={setPatientData}/>
    </div>
  );
}

export default App;