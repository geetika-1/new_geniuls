import React from 'react'
import Cards1 from '../../Examples/Cards1'
import { Box } from '@mui/material'
import { CardData } from '../../CreatedData'

const Card = () => {
  return (
    <Box sx={{display:"flex", justifyContent:{xs:"space-evenly",sm:"space-evenly", md:"space-between"}, alignItems:"center" , mt:3 , flexWrap:"wrap"}}>
      {
        CardData.map((value, index)=>(
          <Cards1 key={index} value={value}  sx={{width:"100%",mb:"30px"}} />
        ))
      }
  
    </Box>
  )
}

export default Card