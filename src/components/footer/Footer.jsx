import React from 'react'
import { List,ListItem,Box,makeStyles } from '@material-ui/core'



const useStyle = makeStyles((theme) => ({
  main_box: {
    display: "flex",
    width: "100%",
    border: "1px solid black",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: "rgb(0, 0, 0)",
    
    letterSpacing: "2px",
  },
  ifram: {
    width: "100%",
    height: "150px",
    border: "0",
  },
  footer_box: {
    color: "white",
    
  },
  h: {
   
    color: "#808290",
    textAlign: "center",
    textTransform: "capitalize",

    fontSize: "18px",
    // margin: "10px 0 5px -122px",
    // display: "inline-block",
    },
  
    list: {
      textAlign:"center",
  }
}));
export default function Footer() {
    const classes = useStyle();
    return (
      <>
        <Box className={classes.main_box}>
          <Box className={classes.footer_box}>
            <h4 className={classes.h}>Quick Links</h4>

            <List className={classes.list}>
              <ListItem>Adress : Manjhli Chowk Madhubani Purnea</ListItem>
              <ListItem>Email : Pr16866@gmail.com</ListItem>
              <ListItem>Mobile : 8529745331</ListItem>
              <ListItem>Time: 24 X 7</ListItem>
            </List>
          </Box>
          <Box className={classes.footer_box}>
            <h4 className={classes.h}>Address</h4>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.01016850669!2d85.0730023520432!3d25.608020764437786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1615466827558!5m2!1sen!2sin"
              
         title="piyuah"
              allowfullscreen=""
              loading="lazy"
              className={classes.ifram}
            ></iframe>
          </Box>
        </Box>
      </>
    );
}
