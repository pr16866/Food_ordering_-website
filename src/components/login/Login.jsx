import React from 'react'
import { Link } from 'react-router-dom';
import { TextField,Button,Box,makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  main_box: {
    width: "50%",
    boxShadow: "0px 0px 20px rgb(77, 77, 77,0.5)",
    margin: "50px auto",
    height: "500px",
    display: "flex",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
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
    gap: "20px",
  },
  input: {
    display: "block",
    fontSize: "20px",
    width: "100%",
    height: "50px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #808290",
    color: "#808290",
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
}));
export default function Login() {
    const classes = useStyle();
    return (
      <>
        {/* id="outlined-basic" */}
        <Box className={classes.main_box}>
          <Box className={classes.inner_box}>
            <input
              type="text"
              placeholder="Email Id..."
              className={classes.input}
            />
            <input
              type="text"
              placeholder="Password..."
              className={classes.input}
            />

          <Button variant="contained" className={classes.button}>Log In</Button>
                    <Typography className={classes.para}>
                        Are you new here <Link to="/register">Register Now </Link>
          </Typography>
                </Box>
        </Box>
      </>
    );
}
