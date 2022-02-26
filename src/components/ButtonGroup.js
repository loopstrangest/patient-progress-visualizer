import Container from '@mui/material/Container';
import PatientButton from './PatientButton';
import patientData from "../MH Score Visualizer Data.json";

//Get list of unique patients
var patientList = patientData.map(data => data['Patient Name'])
  .filter((value, index, self) => self.indexOf(value) === index);


const Buttons = ({chartDataset, setPatient, setPatientData}) => (
    <Container disableElevation variant="contained" sx={{
        margin: 'auto',
        marginTop: '0.5rem',
        display:'flex',
        width:'80%',
        height:'10%',
        flexWrap:'wrap',
        justifyContent: 'center'
    }}>
        {patientList.map((patient) => (
          <PatientButton key={patient} setPatient={setPatient}
          setPatientData={setPatientData} patientName={patient}
          chartDataset={chartDataset}/>
        ))}
    </Container>
);

export default Buttons;