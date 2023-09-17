import React from 'react'
import Card2 from '../../Examples/Card2'
import { CardData2 } from '../../CreatedData'
import { Stack } from '@mui/material'

const Ups = () => {
  return (
    <>
    <Stack direction={"row"} flexWrap={{xs:"wrap", sm:"wrap", md:"nowrap"}} spacing={2}>
    {CardData2.map((value, index)=>(
      <Card2 key={index} value={value} />
    ))
    }
   
    </Stack>
    </>
    
  )
}

export default Ups