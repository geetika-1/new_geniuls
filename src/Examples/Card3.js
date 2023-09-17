import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Card3 = (values) => {
  // console.log(values.values);
//   useEffect(()=> {
//     AOS.init({duration: 1000,
//     offset:300})
// },[]);

  return (
    <Box sx={{px:"15px"}} data-aos={"fade-up"}>
      <Box
        sx={{
          width: {xs:"300px", sm:"300px", md:"335px", lg:"335px"},
          padding: "1.875rem 1.875rem 20px",
          bgcolor:"white",
          borderRadius:"12px",
          border: "1px solid transparent",
          position: "relative",
          "&::before": {
            //  content:'","',
            content: '"“"',
            position: "absolute",
            top: "10px",
            right: "15px",
            zIndex: 1,
            color: " #E5F0FD",
            lineHeight: 1,
            fontSize: "90px",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "#6440fb",
            fontWeight: 500,
            m: "0 0 18px",
          }}
        >
          {" "}
          {values.values.text1}
        </Typography>

        <Typography variant="body1" color={"secondary.main"} fontWeight={600}>
      {values.values.text2}
        </Typography>

        <Box sx={{display:"flex", justifyContent:"start", alignItems:"center",paddingTop:" 20px",
    marginTop:" 20px",
    bordeTop: "1px solid #EDEDED"}}>
            <Avatar sx={{p:1}} />
            <Typography variant="subtitle" p={1}>
            {values.values.name}
            </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card3;
