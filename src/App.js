// Imports: React, JSON data, components
import React, {useState} from 'react';
import dataset from "./MH Score Visualizer Data.json"
import GlobalStyle from "./components/GlobalStyle";
import LineChartDisplay from "./components/LineChart";
import LineChartTitle from "./components/LineChartTitle";
import Buttons from './components/ButtonGroup';

// Get unix times for Recharts line chart implementation
dataset.forEach(entry => {
  var d = new Date(entry['Timestamp']);
  entry["UnixTime"] = d.getTime();
});

// Get an initial patient to display an initial data set on page load
var initialPatient = dataset.map(data => data['Patient Name'])
  .filter((value, index, self) => self.indexOf(value) === index)[0];

function App() {
  // patient: the selected patient
  const [patient, setPatient] = useState(initialPatient);
  
  // patientData: the selected patient's data
  const [patientData, setPatientData] = useState(dataset.filter(
    data => data["Patient Name"] === patient));
  
  // opacity: the opacity of each Recharts line
  const [opacity, setOpacity] = useState({
    "GAD-7 Score": 1,
    "PHQ-9 Score": 1
  });

  /* Calculate unix times
  and store in an array compatible with Recharts line chart */
  const unixTimes = patientData.map(entry => entry["UnixTime"])
  const unixTimeMin = Math.min(...unixTimes);
  const unixTimeMax = Math.max(...unixTimes);
  const unixTimeRange = unixTimeMax - unixTimeMin;
  const unixTimeTicks = [
    unixTimeMin, unixTimeMin+1/5*unixTimeRange,
    unixTimeMin+2/5*unixTimeRange, unixTimeMin+3/5*unixTimeRange,
    unixTimeMin+4/5*unixTimeRange, unixTimeMax
  ];
  
  // Update line opacities to highlight the line corresponding to legend mouse hover
  const handleMouseEnter = (
    (o) => {
      const { dataKey } = o;
      setOpacity({
      "GAD-7 Score": 0.33,
      "PHQ-9 Score": 0.33,
      [dataKey]: 1});
    }
  );
const handleMouseLeave = (
   () => {
     setOpacity({
      "GAD-7 Score": 1,
      "PHQ-9 Score": 1})
   }
 );

  return (
    <div className="App">
      <GlobalStyle />
      <div className="Container">
        <div className="Header">
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
        <Buttons dataset={dataset}
        setPatient={setPatient} setPatientData={setPatientData}/>
      </div>
    </div>
  );
}

export default App;