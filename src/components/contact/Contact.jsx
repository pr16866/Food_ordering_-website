// Contact();
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  main_box: {
    width: "50%",
    boxShadow: "0px 0px 20px rgb(77, 77, 77,0.5)",
    margin: "50px auto",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
        borderRadius: "5px",
    position:"relative",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  inner_box: {
    width: "80%",

    height: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "30px",
  },
  input: {
    display: "block",
    fontSize: "20px",
    width: "100%",
    height: "50px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #808080",

    color: "black",
  },
  button: {
    lineHeight: "40px",
    background: "gray",
    borderRadius: "20px",
    fontSize: "20px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "black",
    },
  },
  para: {
    fontSize: "20px",
    },
    h1: {
        textAlign: "center",
        position: "absolute",
        top :"25px"
        
  }
}));
export default function Contact() {
  const classes = useStyle();
  let history = useHistory();
  return (
    <>
      <Box className={classes.main_box}>
        <h1 className={classes.h1}>Fill this form our team will contact you</h1>
        <Box className={classes.inner_box}>
       
          <input type="text" placeholder="Name..." className={classes.input} />
          <input
            type="email"
            placeholder="Email Id..."
            className={classes.input}
          />
          <input
            type="number"
            placeholder="Phone No.."
            className={classes.input}
          />

          <input
            type="text"
            placeholder="Password..."
            className={classes.input}
          />
          <input
            type="password"
            placeholder="Confirm Password..."
            className={classes.input}
          />

          <Button
            variant="contained"
            className={classes.button}
            onClick={() => history.push("/login")}
          >
            Submit 
          </Button>
        </Box>
      </Box>
    </>
  );
}

