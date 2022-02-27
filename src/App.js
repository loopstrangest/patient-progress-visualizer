// Imports: React, JSON data, components, constants
import React, { useState } from "react";
import dataset from "./MH Score Visualizer Data.json";
import GlobalStyle from "./components/GlobalStyle";
import LineChartDisplay from "./components/LineChart";
import LineChartTitle from "./components/LineChartTitle";
import Buttons from "./components/ButtonGroup";
import {
  PATIENT_NAME,
  TIMESTAMP,
  GAD7_SCORE,
  PHQ9_SCORE,
  UNIXTIME,
} from "./constants.js";

// Get unix times for Recharts line chart implementation
dataset.forEach((entry) => {
  var d = new Date(entry[TIMESTAMP]);
  entry[UNIXTIME] = d.getTime();
});

// Get an initial patient to display an initial data set on page load
const initialPatient = dataset[0][PATIENT_NAME];

function App() {
  // patient: the selected patient
  const [patient, setPatient] = useState(initialPatient);

  // patientData: the selected patient's data
  const [patientData, setPatientData] = useState(
    dataset.filter((data) => data[PATIENT_NAME] === patient)
  );

  // opacity: the opacity of each Recharts line
  const [opacity, setOpacity] = useState({
    [GAD7_SCORE]: 1,
    [PHQ9_SCORE]: 1,
  });

  /* Calculate unix times
  and store in an array compatible with Recharts line chart */
  const unixTimes = patientData.map((entry) => entry[UNIXTIME]);
  const unixTimeMin = Math.min(...unixTimes);
  const unixTimeMax = Math.max(...unixTimes);
  const unixTimeRange = unixTimeMax - unixTimeMin;
  const unixTimeTicks = [
    unixTimeMin,
    unixTimeMin + (1 / 5) * unixTimeRange,
    unixTimeMin + (2 / 5) * unixTimeRange,
    unixTimeMin + (3 / 5) * unixTimeRange,
    unixTimeMin + (4 / 5) * unixTimeRange,
    unixTimeMax,
  ];

  // Update line opacities to highlight the line corresponding to legend mouse hover
  const handleMouseEnter = (o) => {
    const { dataKey } = o;
    setOpacity({
      [GAD7_SCORE]: 0.33,
      [PHQ9_SCORE]: 0.33,
      [dataKey]: 1,
    });
  };
  const handleMouseLeave = () => {
    setOpacity({
      [GAD7_SCORE]: 1,
      [PHQ9_SCORE]: 1,
    });
  };

  return (
    <div className="App">
      <GlobalStyle />
      <div className="Container">
        <div className="Header">
          <h1>Patient Progress Visualizer</h1>
          <h2>View the progress of your patients' mental health scores</h2>
        </div>
        <div className="LineChartContainer">
          <LineChartTitle patientName={patient} />
          <LineChartDisplay
            data={patientData}
            opacity={opacity}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            unixTimeTicks={unixTimeTicks}
          />
        </div>
        <Buttons
          dataset={dataset}
          setPatient={setPatient}
          setPatientData={setPatientData}
        />
      </div>
    </div>
  );
}

export default App;
