import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core';
import { Star, StarHalf } from "@material-ui/icons";
import slide1 from'../../images/slide1.jpg'
const usestyle = makeStyles((theme)=>({
    box: {
       width: '350px',
    height: '250px',
   margin:'10px 0',
   textAlign: 'center',
        boxShadow: '5px 5px 5px 2px rgb(0, 0, 0,0.5)',

        transitionProperty: 'all',
   display:"inline-block",
        transitionDuration: '0.5s',
        '&:hover': {
            transform: "scale(1.07)",
            
   }
    },
    img: {
        width: '100%',
    height:' 80%',
    },
    icon: {
        color: "orange",
        fontSize:"2rem",
    },
    p: {
        fontWeight: "bold",
        fontSize:"1.4rem",textTransform:"capitalize",
    }

}));
   

export default function Item({details}) {
    const classes = usestyle();
    return (
      <>
        <Box class={classes.box}>
          <img src={details.image} alt="error" className={classes.img} />
          <Star className={classes.icon} />
          <Star className={classes.icon} />
          <Star className={classes.icon} />
          <Star className={classes.icon} />
          <Typography className={classes.p}>{details.name}</Typography>
        </Box>
      </>
    );
}
