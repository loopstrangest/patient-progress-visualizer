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
const datasetWithUnix = dataset.map((entry) => ({
  ...entry,
  [UNIXTIME]: new Date(entry[TIMESTAMP]).getTime(),
}));

// Get an initial patient to display an initial data set on page load
const initialPatient = datasetWithUnix[0][PATIENT_NAME];

// Get list of unique patients for buttons
var patientList = datasetWithUnix
  .map((data) => data[PATIENT_NAME])
  .filter((value, index, self) => self.indexOf(value) === index);

function App() {
  // patient: the selected patient
  const [patient, setPatient] = useState(initialPatient);

  // get the selected patient's data
  const getPatientData = (patient) =>
    datasetWithUnix.filter((data) => data[PATIENT_NAME] === patient);

  // opacity: the opacity of each Recharts line
  const [opacity, setOpacity] = useState({
    [GAD7_SCORE]: 1,
    [PHQ9_SCORE]: 1,
  });

  /* Calculate unix times
  and store in an array compatible with Recharts line chart */
  const unixTimes = getPatientData(patient).map((entry) => entry[UNIXTIME]);
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
            data={getPatientData(patient)}
            opacity={opacity}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            unixTimeTicks={unixTimeTicks}
          />
        </div>
        <Buttons patientList={patientList} setPatient={setPatient} />
      </div>
    </div>
  );
}

export default App;
