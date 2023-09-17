import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card3 from '../../Examples/Card3';
import { CardData3 } from '../../CreatedData';

const Carousels = () => {
    console.log(CardData3);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <>
    <Carousel responsive={responsive}>
  
  {
    CardData3.map((values, index)=>
    //  console.log(values.name)
    (
        
        <Card3 key={index} values={values} 
        />
       
        
    ))
   
  }
  
</Carousel>;
    </>
  )
}

export default Carousels;