import { BackpackOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import FlipNumbers from "react-flip-numbers";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { TbBackpack } from "react-icons/tb";

const Count = (data) => {
  console.log(data)

    useEffect(()=> {
      AOS.init({duration: 1000,
      offset:300})
  },[]);
  return (
    <>
      <Box
        sx={{
          width:"100%",
          display: "flex",
          padding:{xs:0, sm:0, md:2},
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          borderStyle: "solid",
          borderColor: "#FFFFFF26",
          borderWidth:`${data.data.border}`,
          transition:
            "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        }}
        data-aos={"fade-up"}
        
      >
      
        {data.data.icon}

        <FlipNumbers
          height={30}
          width={30}
          color="White"
          play
          perspective={100}
          duration={4}
          numbers={data.data.count}
          numberStyle={{fontSize:"20px",fontWeight:800}}
          nonNumberStyle={{fontSize:20, fontWeight:800}}
        />
        <Typography variant="h5" sx={{fontSize:16, lineHeight:4,fontWeight:800}}>{data.data.name} </Typography>
      </Box>
    </>
  );
};

export default Count;
