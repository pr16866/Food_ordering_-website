import React from 'react';




import { makeStyles,Box,ListItem,List } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



const usestyle = makeStyles({
  main_nav: {
    background: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90px",
    width: "100%",
    position: "fixed",
    zIndex: "5",
  },

  inner_nav: {
    background: "white",
    height: "3vmax",
    position: "relative",
    width: "90%",
    borderRadius: "10px",
  },

  white_shades: {
    height: "3.8vmax",
    width: "12%",
    backgroundColor: "white",
    position: "absolute",
    top: "-0.4vmax",
    zIndex: "-1",
    transform: "translateX(25%)",
    transition: "0.5s  linear",
    
  },

  list: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listitem: {
    fontFamily: `'Roboto', sans-serif`,
    height: "3vmax",
    display: "flex",
    textAlign: "center",
    justifyContent: ["center", "!important"],
    alignItems: "center",

    fontSize: "1.9rem",
    cursor: "pointer",
    width: ["16.66vw", "!important"],
    borderTop: "1px solid",
    borderBottom: "1px solid",
  },
});
export default function Nav() {
  const classes = usestyle();
  const history = useHistory();
  const hoverfun = (num) => {
    let highlighter = document.getElementById("highlighter");
    highlighter.style.transform = `translateX(${num}%)`;
  }
  const aboutfun = () => {
    history.push("/about");
  }
   const homefun = () => {
     history.push("/");
  };
   const contactfun = () => {
     history.push("/contact");
  };
  const loginfun = () => {
    history.push("/login");
  }
  return (
    <>
      <Box className={classes.main_nav}>
        <Box className={classes.inner_nav}>
          <Box className={classes.white_shades} id="highlighter"></Box>
          <List className={classes.list}>
            <ListItem
              className={classes.listitem}
              onMouseOver={() => hoverfun(25)}
              onClick={homefun}
            >
              Home
            </ListItem>
            <ListItem
              className={classes.listitem}
              onMouseOver={() => hoverfun(252)}
              onClick={aboutfun}
            >
              About
            </ListItem>
            <ListItem
              className={classes.listitem}
              onMouseOver={() => hoverfun(480)}
              onClick={contactfun}
            >
              Contact
            </ListItem>
            <ListItem
              className={classes.listitem}
              onMouseOver={() => hoverfun(700)}
              onClick={loginfun}
            >
              Login
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
