import React, { useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
// import img from "../assests/graduation.png";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BsArrowRightShort } from "react-icons/bs";
// import { hover } from "@testing-library/user-event/dist/hover";
import { ArrowForward } from "@mui/icons-material";
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  cart: {
    transition: `transform ease 300ms`,

    "&:hover": {
      // border:"2px solid black",
      boxShadow: "0px 30px 40px 0px rgba(3, 24, 128, 0.2)",
      cursor: "pointer",
      // top: "-10px"
      transform: `translate(0, -20px)`,
      "&  .arrow": {
        visibility:"visible",
        transform: `translateY(-5px) translate3d(0, -5px, 0)`,
        bottom:"40px",
        
      },
      "&  .text":{
        visibility:"hidden"
      }
    },
  },
}));
const Cards1 = (value) => {
  const classes = useStyles();
  console.log(value.value);

//   useEffect(()=> {
//     AOS.init({duration: 2000,
//     offset:300})
// },[]);

  return (
    <Box>
      
      <Box
        className={classes.cart}
        width={{xs:"260px", sm:"260px",md:"200px"}}
        // height={"200px"}

        bgcolor={value.value.color}
        sx={{
          color: "white",
          padding: "40px 40px",
          pb: "45px",
          mb: 2,
          px: 4,
          borderRadius: "6px",
        }}
        // data-aos={"flip-left"}
      >
        <CardMedia
          title="img"
          image={value.value.img}
          sx={{
            width: 40,
            height: 100,
            maxWidth: "100%",
            border: "none",
            borderRadius: 0,
            backgroundSize: "contain",
            p: 1,
          }}
        />
        <Typography variant="h4" fontWeight={700} mb={2}>
          {value.value.text1} <br />
          {value.value.text2}
        </Typography>

        <Typography variant="body2" className="text">{value.value.text3}</Typography>
        <Box>
          <ArrowForward
            className="arrow"
            sx={{
              position:"absolute",
              visibility:"hidden",
              height: "20px",
              width: "20px",
              color:"rgba(255, 255, 255, 0.2)",
              p: 1,
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              lineHeight: "36px",
              
              transition:` transform .3s ease-out`,

            
              "&:hover": {
                cursor: "pointer",
                // left: "40px",
                border: "2px solid #ffffff",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Cards1;
