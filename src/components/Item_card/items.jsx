import React from 'react';
import Item from './item';
import { Box, makeStyles } from '@material-ui/core';

import menu from '../menuApi'
const usestyle = makeStyles((theme) => ({
    box: {
        display: "flex",
        flexWrap: "wrap",
    justifyContent: "space-around",
   
        gap:"40px"
        
  },
  h: {
    textAlign: "center",
    textShadow: "1px 1px 2px red",
    fontSize: "3rem",
    marginBottom: "20px",
    marginTop:"10px",
      textTransform:"capitalize",
  }
}));

export default function Items({category}) {
  const classes = usestyle();
  let filter_item = menu.filter((item, index) => {
    if (category) {
      if (item.category.toUpperCase() === category.toUpperCase()) {
        return item;
      }
    }
    else {
      return menu
    
    }

  
  });
  
 
    return (
      <>
        <Box>
          <h1 className={classes.h}>{category?category:"Our top food item"}</h1>
          <Box className={classes.box}>
            {filter_item.map((item, index) => {
              return <Item details={item} />;
            })}
          </Box>
        </Box>
      </>
    );
}
