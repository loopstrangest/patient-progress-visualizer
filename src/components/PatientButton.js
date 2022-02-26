import Button from '@mui/material/Button';

const PatientButton = ({setPatient, setPatientData,
     patientName, chartDataset}) => (
    <Button variant="contained" disableElevation disableRipple
        onClick={() => {
            setPatientData(chartDataset.filter(
                data => data["Patient Name"] === patientName
        ));
            setPatient(patientName);
        }}
        sx={{
            margin: '5px',
            borderRadius:'.4rem',
            textTransform:'none',
            backgroundColor:'#6d9147',
            '&:hover':{
                backgroundColor:'#5a773a',
                borderColor:'#536f36'
            }      
        }}>{patientName}
    </Button>
);

export default PatientButton;