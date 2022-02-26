import Button from '@mui/material/Button';

const PatientButton = ({setPatient, setPatientData,
     patientName, chartDataset}) => (
    <Button variant="contained" disableElevation
    onClick={() => {
        setPatientData(chartDataset.filter(
            data => data["Patient Name"] === patientName
    ));
        setPatient(patientName);
    }}
    sx={{
        margin: '5px',
        borderRadius:'10px',
        
    }}>{patientName}
        </Button>
);

export default PatientButton;