import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((selected) => ({
    selectbutton: {
        borderRadius: 5,
        padding: 10,
        textAlign: "center",
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "#988585" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,

        width: "22%",
        //   margin: 5,
    },
}));
const SelectButton = ({ children, onClick }) => {
   

    const classes = useStyles();

    return (
        <span onClick={onClick} className={classes.selectbutton}>
            {children}
        </span>
    );
};

export default SelectButton;