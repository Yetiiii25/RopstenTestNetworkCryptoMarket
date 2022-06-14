import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container, Typography } from "@mui/material";
import Carousel from './Carousel'
const useStyles = makeStyles((theme) => ({
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
}));

const Banner = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                            color: 'white'
                        }}
                    >
                        Crypto Market
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    );
}
export default Banner