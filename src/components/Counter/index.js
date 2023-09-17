import React, { useEffect } from 'react'
import { Container, Stack } from '@mui/material'
import Count from '../../Examples/Count'
import { CountData } from '../../CreatedData'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Counter = () => {
  useEffect(()=> {
    AOS.init({duration: 1000,
    offset:300})
},[]);
  return (
    <>
    <Container sx={{bgcolor:"blue.main",    borderRadius:" 5px 5px 5px 5px",transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    padding: "65px 0px 65px 0px"}}
    data-aos={"fade-up"} 
    >
       <Stack direction={{xs:"column", sm:"column",md:"row"}}>
       {
            CountData.map((data, index)=>(
              <Count key={index} data={data} />
            ))
          }
      
       </Stack>
    </Container>
    </>
  )
}

export default Counter;