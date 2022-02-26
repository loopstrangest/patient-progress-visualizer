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
  entry["UnixTime"] = d.getTime();
});

//Get list of unique patients
var patientList = dataset.map(data => data['Patient Name'])
  .filter((value, index, self) => self.indexOf(value) === index);

function App() {
  const [chartDataset] = useState(dataset);
  const [patient, setPatient] = useState(patientList[0]);
  const [patientData, setPatientData] = useState(chartDataset.filter(
  data => data["Patient Name"] == patient));
  const unixTimes = patientData.map(entry => entry["UnixTime"])
  const unixTimeMin = Math.min(...unixTimes);
  const unixTimeMax = Math.max(...unixTimes);
  const unixTimeRange = unixTimeMax - unixTimeMin;
  const unixTimeTicks = [
    unixTimeMin,
    unixTimeMin+1/5*unixTimeRange,
    unixTimeMin+2/5*unixTimeRange,
    unixTimeMin+3/5*unixTimeRange,
    unixTimeMin+4/5*unixTimeRange,
    unixTimeMax
  ];
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
      <div className="header">
      <h1>Patient Progress Visualizer</h1>
      <h2>View the progress of your patients' mental health scores</h2>
      </div>
      <div className="LineChartContainer">
        <LineChartTitle patientName={patient}/>
        <LineChartDisplay
        data={patientData}
        opacity={opacity}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        unixTimeTicks={unixTimeTicks}/>
      </div>
      <Buttons chartDataset={chartDataset}
      setPatient={setPatient} setPatientData={setPatientData}/>
    </div>
  );
}

export default App;