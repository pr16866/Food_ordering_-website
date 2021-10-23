import React from "react";


import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import menu from "../menuApi";
const usestyle = makeStyles((theme) => ({
  nav: {
    display: "flex",
    transition: "0.5s linear",
    transform: "translateX(0px)",
    boxShadow: "5px 5px 5px 2px rgb(0, 0, 0,0.5)",
  },
  ul: {
    width: "316px",
    background: "#303036",
    // height:"500px",
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  li: {
    height: "38px",
    width: "90%",
    textTransform:"capitalize",

    fontSize: "18px",
    margin: "auto",
    lineHeight: "38px",
    listStyle: "none",
    borderRadius: "2px",
    marginTop: "3px",
    color: " #fff!important",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(255, 255, 255,0.2)",
    },
    "&:active": {
      backgroundColor: "rgb(255, 255, 255,0.4)",
    },
  },
  icon: {
    textAlign: "center",
    height: "20px",
    marginTop: "25px",
    marginLeft: "20px",
    cursor: " pointer",
    borderRadius: "5px",

    padding: "5px",
    display: "flex",
    alignItems: "flex-start",
  },
  close: {
    color: "black",
  },
  button: {
    height: "32px",
    width: "75px",
    padding: "6px",
    textAlign: "center",
    border: "1px solid #808290",
    background: " #303036",
    color: "#fff!important",
    cursor: "pointer",
    fontSize: "14px",
  },
  language: {
    paddingBottom: "27px",
    borderBottom: "1px solid #808290",
  },
  spn: {
    fontSize: "17px",
    color: "#808290",

    margin: "10px 0 5px -122px",
    display: "inline-block",
  },
}));
export default function Category() {
  const classes = usestyle();

  const history = useHistory();
  
 


  let uniquelist = menu.map((item,index) => {
    let var1 = item.category.toLowerCase();
   
    return var1;

  })
  
  let uniquecategory = [...new Set(uniquelist)];
  const querryfun = (item) => {
    history.push(`/?category=${item}`);
}
  
  return (
    <div>
      <nav id="nav" className={classes.nav}>
        <ul className={classes.ul}>
          <span className={classes.spn}>Menu</span>
          {uniquecategory.map((item, index) => {
            return (
              <>
                <li className={classes.li} key={index} onClick={()=>querryfun(item)}>
                  {item}
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
