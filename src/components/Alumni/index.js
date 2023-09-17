import React, { useEffect } from 'react'
import Card3 from '../../Examples/Card3'
import { CardData3 } from '../../CreatedData'
import Carousels from '../Carousel'
import { Box, Typography } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Alumni = () => {

  useEffect(()=> {
    AOS.init({duration: 1000,
    offset:300})
},[]);

  return (
    <Box sx={{ backgroundColor:"#6440FB", width:"100%",padding: "100px 0px 110px 0px"}}data-aos={"fade-up"} >
      <Typography variant='h2' color={"#00FF84"} mb={2} fontWeight={700} lineHeight={2} sx={{textAlign:"center"}}>What People Say</Typography>
      <Typography variant='h5' color={"#fff"} sx={{textAlign:"center"}} mb={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

   <Carousels />
    </Box>
  )
}

export default Alumni