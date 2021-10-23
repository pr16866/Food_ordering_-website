import React from 'react'
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import shef1 from './shef1.jpg';
import shef2 from "./shef2.jpg";
import shef3 from "./shef3.jpg";
import { Star, StarHalf } from "@material-ui/icons";
const usestyle = makeStyles((theme) => ({
  aboutus: {
    textAlign: "center",
    width: "95vw",
    margin: "0 auto",
  },
  heading: {
    fontSize: "35px",
    textShadow: "1px 1px 2px red",
  },
  para: {
    fontSize: "18px",
  },
  Mambers: {
    display: "flex",
    // height: "400px",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  team_member: {
    width: "350px",

    height: "250px",

    margin: "10px 0",
    textAlign: "center",
    boxShadow: "5px 5px 5px 2px rgb(0 0 0 / 50%)",
    transitionProperty: "all",
    transitionDuration: "0.5s",
    "&:hover": {
      transform: "scale(1.07)",
    },
  },
  img: {
    width: "100%",
    height: "82%",
  },
  icon: {
    color: "orange",
    fontSize: "2rem",
    },
    rated: {
        fontWeight: "bold",
        fontSize:"13px",
  }
}));

export default function About() {

    const classes = usestyle();
    return (
      <>
        <Box className={classes.aboutus}>
          <br />

          <h2 className={classes.heading}>About Us</h2>
          <br />
          <Typography className={classes.para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            quisquam repellat harum quidem quod incidunt, laboriosam dolorum
            quaerat dolor enim iure optio inventore omnis facere dicta. Ad
            minima iusto vitae provident veritatis deleniti nobis tempora, error
            dolorem numquam. Et aspernatur debitis similique, odio repellendus
            pariatur cumque eius nisi quia saepe necessitatibus ratione tempore
            deserunt consequatur quam quasi reprehenderit vel iusto possimus?
            Quam ipsa ut vel repellendus ducimus saepe debitis perspiciatis
            dolor officia praesentium illo assumenda omnis cumque minus sint qui
            ea optio cupiditate tempora, error aspernatur cum? Dolorem neque
            voluptate tenetur facilis ipsam inventore ipsa sed consectetur illo,
            voluptates accusamus animi cum aspernatur reiciendis eius enim dolor
            cumque! Et, a facere iusto nisi nam neque facilis quam ab odit at,
            ipsa expedita, soluta beatae cupiditate dignissimos deleniti modi!
            Sequi voluptatem debitis quis molestiae accusantium. Consequatur ea
            rem et nemo eaque alias nisi culpa commodi voluptatem, assumenda ex
            deserunt recusandae autem tenetur a porro in beatae nihil officiis
            sequi molestias optio. Aperiam architecto at repellendus,
            praesentium, et maxime dolorem, excepturi facere dolor dolore ipsa
            culpa nemo impedit est maiores sit inventore quam dolorum nisi cum
            repellat veniam in eum voluptatum. Cum autem alias ut inventore
            dolorem laborum minima ab consequatur fugit!
          </Typography>
          <br />
          <br />
          <Typography className={classes.para}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            aspernatur sunt, consectetur beatae consequuntur vel nisi at
            laborum, fugit aut architecto, velit temporibus voluptate. Quae
            perspiciatis veritatis soluta? Itaque eligendi temporibus
            necessitatibus inventore sint reprehenderit, nobis velit veniam
            cupiditate quia. Ea aut officia laudantium quidem beatae qui
            laboriosam optio facilis totam molestias iusto ducimus voluptate
            voluptates quo, delectus nihil eligendi consequuntur inventore earum
            aliquid reiciendis modi? Iste minima quia at cum, optio natus
            laboriosam unde. Enim voluptatem voluptates eius magni quidem,
            impedit optio necessitatibus, quo repudiandae consequatur illum!
            Similique alias neque beatae vitae ipsam quisquam cum pariatur
            suscipit, ex, a exercitationem ducimus dolorum quos non voluptate
            unde nihil praesentium, magni laborum quia maxime. Odio voluptate ex
            sint quo sequi! Facere modi deleniti, eveniet quia numquam
            distinctio praesentium incidunt, optio, pariatur quasi in unde.
            Cumque cupiditate nulla iste voluptate sequi praesentium tempore
            ratione omnis unde reprehenderit, aut possimus qui at sint suscipit
            laborum natus labore ducimus dolorum dolores officiis, nesciunt
            modi. Commodi blanditiis recusandae consectetur expedita. Sunt autem
            fugiat dolorem repellendus voluptatem dolorum, voluptatum reiciendis
            et libero saepe distinctio porro iure numquam rem? Quos in qui
            accusantium expedita omnis nulla, explicabo veniam corrupti at,
            aliquid culpa quae soluta hic et laborum dicta, a quisquam nesciunt
            vitae! Quia inventore ad perferendis odit laudantium sequi aperiam
            rerum quis eius! Ut asperiores fugit assumenda, possimus odit, culpa
            voluptas mollitia tenetur sunt quasi voluptates sint consectetur
            numquam hic et ipsum perferendis totam dicta! Vel impedit tempore
            distinctio iure ducimus a explicabo beatae unde, quibusdam corrupti
            iste,
          </Typography>
          <br />
          <h2 className={classes.heading}>Our Members</h2>
          <br />
          <Box className={classes.Mambers}>
            <Box className={classes.team_member}>
              <img src={shef1} alt="" className={classes.img} />
              <Star className={classes.icon} />
              <Star className={classes.icon} />
              <Star className={classes.icon} />
              <StarHalf className={classes.icon} />
              <Typography className={classes.rated}>Rated</Typography>
            </Box>
            <Box className={classes.team_member}>
              <img src={shef2} alt="" className={classes.img} />
              <Star className={classes.icon} />
              <Star className={classes.icon} />
              <Star className={classes.icon} />
              <Star className={classes.icon} />
              <Typography className={classes.rated}>Rated</Typography>
            </Box>
            <Box className={classes.team_member}>
              <img src={shef3} alt="" className={classes.img} />
              <Star className={classes.icon} />
              <Star className={classes.icon} />
              <Star className={classes.icon} />
              <StarHalf className={classes.icon} />
              <Typography className={classes.rated}>Rated</Typography>
            </Box>
          </Box>
        </Box>
        <br />
      </>
    );
}
