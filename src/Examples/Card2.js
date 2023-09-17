
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Card2 = (value) => {

  useEffect(()=> {
    AOS.init({duration: 1000,
    offset:300})
},[]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: {xs:"100%",sm:"35%", md:"30%"},
          border: "1px solid #f2f3f7",
          borderRadius: " 6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "35px 50px",
          pr: 5,
          textAlign: "center",
          // mb: "30px",
          "&::after": {
            position: " absolute",
            content: '""',
            top: "0px",
            left: "auto",
            right: 0,
            width: 0,
            height: "1%",
            background: "#2b4eff",
            "-webkit-border-radius": "6px",
            "-moz-border-radius": "6px",
            
            borderRadius: "6px",
            zIndex: -1
          },
          "&:hover": {
            boxShadow:
              "0px -3px 0px 0px rgba(43, 78, 255, 0.004), 0px 30px 50px 0px rgba(1, 11, 60, 0.08)",
            borderColor: "#ffffff",
            "& .icon":{

              borderColor: "#2b4eff",
              transition: "all 0.3s ease-out 0s",
            },
            transition: "all 0.3s ease-out 0s",
            "&::after": {
              width: "100%",
              left: 0,
              right: "auto",
              transition: "all 0.3s ease-out 0s",
            },
          },
        }}
        data-aos={"fade-up"}
      >
        <Box
        className="icon"
          sx={{
            width: "70px",
            height: "70px",
            border: "2px solid #ebedf3",
            borderRadius: "50%",
            textAlign: "center",
            lineHeight: 6,
            mb: 2,
          }}
        >
          
          {value.value.icon}
        </Box>
        <Box>
          <Typography variant="h5" color={"secondary"} fontWeight={700} mb={1}>
          {value.value.text1}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "grey.main", fontSize: "16px" }}
          >
          {value.value.text2}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Card2;
