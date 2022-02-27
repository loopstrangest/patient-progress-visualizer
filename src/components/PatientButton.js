// Import MaterialUI button, constant
import Button from "@mui/material/Button";
import { PATIENT_NAME } from "../constants.js";

const PatientButton = ({
  setPatient,
  setPatientData,
  patientName,
  dataset,
}) => (
  // Custom-styled button
  <Button
    variant="contained"
    disableElevation
    disableRipple
    // Set patient and patientData on button click
    onClick={() => {
      setPatientData(
        dataset.filter((data) => data[PATIENT_NAME] === patientName)
      );
      setPatient(patientName);
    }}
    sx={{
      margin: "5px",
      borderRadius: ".4rem",
      textTransform: "none",
      backgroundColor: "#6d9147",
      "&:hover": {
        backgroundColor: "#5a773a",
        borderColor: "#536f36",
      },
    }}
  >
    {patientName}
  </Button>
);

export default PatientButton;
