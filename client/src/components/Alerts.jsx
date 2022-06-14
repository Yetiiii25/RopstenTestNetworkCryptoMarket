// Snack Component - https://material-ui.com/components/snackbars/
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { CryptoState } from "../context/CryptoContext";

const Alerts = () => {
    const { alert, setAlert } = CryptoState();

    const handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setAlert({ open: false });
    };

    return (
        <Snackbar
            open={alert?.open}
            autoHideDuration={3000}
            onClose={handleCloseAlert}
        >
            <Alert
                onClose={handleCloseAlert}
                elevation={10}
                variant="filled"
                severity={alert?.type}
            >
                {alert?.message}
            </Alert>
        </Snackbar>
    );
};

export default Alerts;