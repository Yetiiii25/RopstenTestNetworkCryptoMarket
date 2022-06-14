import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from "@mui/material/Fade";
import { Button, Typography, Tab, Tabs, AppBar, Box } from "@mui/material";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import { CryptoState } from "../../context/CryptoContext";
import { auth } from "../../config/firebase";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        color: "white",
        borderRadius: 10,
        position: 'absolute',
    },
    google: {
        padding: 24,
        paddingTop: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 20,
        fontSize: 20,
    },
}));

export default function AuthModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const { setAlert } = CryptoState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                setAlert({
                    open: true,
                    message: `Sign Up Successful. Welcome ${res.user.email}`,
                    type: "success",
                });

                handleClose();
            })
            .catch((error) => {
                setAlert({
                    open: true,
                    message: error.message,
                    type: "error",
                });
                return;
            });
    };

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    my: 2, display: {
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        background: "#988585",
                        width: 106, height: 35,
                        marginLeft: 15
                    }
                }}
                onClick={handleOpen}
            >
                Login
            </Button>
            <Modal

                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <AppBar
                            position="static"
                            style={{
                                backgroundColor: "transparent",
                                color: "white",
                            }}
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                style={{ borderRadius: 10 }}
                            >
                                <Tab label="Login" />
                                <Tab label="Sign Up" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <Login handleClose={handleClose} />}
                        {value === 1 && <Signup handleClose={handleClose} />}
                        <Box className={classes.google}>
                            <span>OR</span>
                            <GoogleButton
                                style={{ width: "100%", outline: "none" }}
                                onClick={signInWithGoogle}
                            />
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}