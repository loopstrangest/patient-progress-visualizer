// Imports: MaterialUI container, child component, JSON data, constant
import Container from "@mui/material/Container";
import PatientButton from "./PatientButton";

const Buttons = ({ patientList, setPatient }) => (
  // Custom-styled button container
  <Container
    disableElevation
    variant="contained"
    sx={{
      margin: "auto",
      marginTop: "0.5rem",
      display: "flex",
      width: "80%",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {/* Display one button per patient with patientData
    to update the line chart on click */}
    {patientList.map((patient) => (
      <PatientButton
        key={patient}
        setPatient={setPatient}
        patientName={patient}
      />
    ))}
  </Container>
);

export default Buttons;
