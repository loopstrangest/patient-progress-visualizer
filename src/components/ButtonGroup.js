// Imports: MaterialUI container, child component, JSON data
import Container from '@mui/material/Container';
import PatientButton from './PatientButton';
import patientData from "../MH Score Visualizer Data.json";

// Get list of unique patients for buttons
var patientList = patientData.map(data => data['Patient Name'])
  .filter((value, index, self) => self.indexOf(value) === index);

const Buttons = ({dataset, setPatient, setPatientData}) => (
    // Custom-styled button container
    <Container disableElevation variant="contained" sx={{
        margin: 'auto',
        marginTop: '0.5rem',
        display:'flex',
        width:'80%',
        flexWrap:'wrap',
        justifyContent: 'center'
    }}>
    {/* Display one button per patient with patientData
    to update the line chart on click */}
        {patientList.map((patient) => (
          <PatientButton key={patient} setPatient={setPatient}
          setPatientData={setPatientData} patientName={patient}
          dataset={dataset}/>
        ))}
    </Container>
);

export default Buttons;