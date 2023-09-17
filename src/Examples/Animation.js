import React, { useEffect } from 'react'
// import {motion} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Animation = () => {

    useEffect(()=> {
        AOS.init({duration: 1000,
        offset:300})
    },[]);
  return (
    // <motion.div
    // // initial={{opacity:0 ,scale:0, x:500}}
    // // whileInView={{opacity:1, scale:1, x:0}}
    // // animate={{rotate: 45}}
    // // transition={{duration: 0.6}}/

    // variants={{
    //     hidden:{opacity:0, y:75},
    //     visible:{opacity:1, y:0}
    // }}
    // initial="hidden"
    // animate="visible"
    // viewport={{once:true}}
    // transition={{duration:0.5, delay:0.25}}

    // // variants={{
    // //     hidden:{left:0},
    // //     visible:{left:"100%"}
    // // }}

    // // initial="hidden"
    // // animate="visible"
    // // transition={{duration: 0.5, ease: "easeIn"}}
    // style={{width:"10vh", height:"10vh", backgroundColor:"black", color:"#fff"}}
    // >Animation</motion.div>
    <div style={{width:"10vh", height:"10vh", backgroundColor:"black", color:"#fff"}} data-aos="fade-right">  


    </div>
  )
}

export default Animation;