
import { Box, makeStyles } from "@material-ui/core";
import React from 'react';

import Image_slider from './components/Header/Image_slider';
import Items from './components/Item_card/items';
import Category from './components/Menu_nav/category';

import { useLocation} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  main_box: {
    
    width: "95vw",
    margin: "0 auto",
    overflow: "hidden",
    // display:"flex"
  },
  category: {
    display: "grid",
    
   
    gridTemplateRows: "1fr",
    gridTemplateColumns: "275px 1fr",
    marginTop: "40px",
    marginBottom:"40px",
   columnGap:"20px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  cat: {
    // display: "inline-block",
    // height:"500px"
  },
}));
export default function Home() {

  const classes = useStyle();
  const { search } = useLocation();
  const name = new URLSearchParams(search).get("category");
 
    return (
      <>
      

        <Box className={classes.main_box}>
          <Image_slider />
          <Box className={classes.category} >
            <Category className={classes.cat} />
            <Items className={classes.item} category={name}/>
          </Box>
        </Box>
      </>
    );
}
