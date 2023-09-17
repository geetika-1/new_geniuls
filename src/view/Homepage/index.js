import React, { useEffect } from "react";
import Styles  from "../../App.module.css";
import Navbar from "../../components/Navbar";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  keyframes,
} from "@mui/material";
import { bounce } from "react-animations";
import Footer from "../../components/Footer";
import Counter from "../../components/Counter";
import { AiOutlineArrowUp, AiOutlineThunderbolt } from "react-icons/ai";
import {AiOutlineBulb} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai"
import Card from "../../components/Card";
import Ups from "../../components/Ups";
import Fcomp from "../../Examples/Fcomp";
import Alumni from "../../components/Alumni";
import { ScrollToTop } from "react-to-top";
import Animation from "../../Examples/Animation";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { blue } from "@mui/material/colors";
import EmojiCarousel from "../../Examples/EmojiCarousel";


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const motion = keyframes`
0%, 100% {
  transform: translateY(0);
}
50% {
  transform: translateY(-100px);
}
}
`;
const dude = keyframes`
from {
  clip-path: inset(100% 0 0 0);
}
to {
  clip-path: inset(0 0 0 0);
}
}
`;
const bounceAnimation = keyframes`${bounce}`;


const Homepage = () => {

  useEffect(()=> {
    AOS.init({duration: 2000,
    offset:300})
},[]);

  return (
    <>
      <Navbar />

      <Box
        sx={{
          width: "100%",
          // height: {xs:850, sm:"80rem", md:950, lg:950},
          minHeight:{xs:600, sm:600, md:650, lg:700},
          background: "#edeef3",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              animation: `${spin} 6s linear infinite alternate`,
              position: "absolute",
              top: "22%",
              left: "5%",
            }}
          >
            <img
              src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle.png"
              alt="circle1"
              sx={{
                width: 60,
                // animation: `${spin} 2s linear infinite`
              }}
            />
          </Box>

          <img
            src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle-2.png"
            alt="circle1"
            style={{ position: "absolute", bottom: "38%", left: "0%" }}
          />
          <img
            src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-dot-2.png"
            alt="circle1"
            style={{ position: "absolute", bottom: "45%", right: "0%" }}
          />
        </Box>
        <Container sx={{ position: "relative" }}>
          <Stack direction={{xs:"column", sm:"column", md:"row"}} justifyContent={{xs:"center",sm:"center", md:"center"}} alignItems={{xs:"center",sm:"center"}} mt={{xs:11, sm:11, md:2, lg:2}} p={{xs:1,sm:5, md:2}}>
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: 100, color: "secondary.main",fontSize:{xs:"30px", sm:"55px", md:"55px"} }}
              >
                Access 2700+
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight:{xs:500,sm:700,md:700},
                  position: "relative",
                  zIndex: 1,
                  color: "secondary.main",
                  fontSize:{xs:"30px", sm:"55px", md:"55px"}
                }}
              >
                Online
                <Box
                  sx={{
                    animation: `${dude} 5s linear infinite`,
                    position: "absolute",
                    bottom: 55,
                    left: -4,
                    zIndex: -1,
                  }}
                >
                  <img
                    src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/yellow-bg.png"
                    alt=""
                    style={{}}
                  />
                </Box>
                Tutorial From Top Instructor.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom={5}
                sx={{ color: "secondary.main", p: 2 }}
              >
                Outcome driven initiative. Unique Industry-Oriented curriculum
                designed for you by Experts mentors.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "primary.main",
                  textTransform: "capitalize",
                  px: 4,
                  height: 45,
                  "&:hover": {
                    boxShadow: "0px 10px 24px 0px rgba(4, 23, 118, 0.3)",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
           
            <Box position={"relative"} sx={{ display: "flex", zIndex: 1 }}>
              {/* <Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -25,
                    left: -30,
                    animation: `${motion} 4s linear infinite`,
                    zIndex: -1,
                  }}
                >
                  <img
                    src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-dot.png"
                    alt="1"
                  />
                </Box>

                <img
                  src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle-3.png"
                  alt="2"
                  className={Styles.img2}
                  style={{
                    
                  }}
                />
                <img
                  src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle-4.png"
                  alt="3"
                  style={{
                    position: "absolute",
                    top: -50,
                    right: "10%",
                    zIndex: -1,
                  }}
                />
              </Box>
              <Box sx={{ position: "relative", mt:{xs:2,sm:2}}}>
                <img
                 className={Styles.img1}
                  src="https://bdevs.net/wp/educal/wp-content/uploads/2021/12/hero-1.jpg"
                  alt=""
                  style={{ maxWidth: "100%", maxHeight:700, }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: {xs:-2,sm:-2,md:60,lg:60},
                    right: {xs:15, sm:20, md:-145, lg:-145},
                    padding: "15px 25px",
                    pb: 2,
                    backgroundColor: "#ffff",
                    borderRadius: 2,
                    boxShadow: "0px 30px 60px 0px rgba(1, 11, 60, 0.14)",
                    animation: `2.5s ${bounceAnimation} infinite`,
                  }}
                >
                  <Typography
                    variant="body1"
                    color="#474956;"
                    sx={{ fontSize: 14 }}
                  >
                    Tomorrow is our
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary"
                    sx={{ fontWeight: 700, fontSize: 16 }}
                  >
                    “When I Grow Up” Spirit Day!
                  </Typography>
                </Box>
              </Box>

              <Box mt={6} sx={{display:{sm:"none", xs:"none", md:"block"}}}>
                <img
                  src="https://bdevs.net/wp/educal/wp-content/uploads/2021/12/hero-sm-1.jpg
"
                  alt=""
                  style={{
                    maxWidth: 200,
                    maxHeight: 240,
                    borderRadius: "0px 40px 4px 0px",
                    boxShadow: "0px 30px 60px 0px rgba(1, 11, 60, 0.14)",
                  }}
                />
              </Box> */}
              
            </Box>
            <EmojiCarousel/>


          </Stack>
        </Container>
      </Box>

      <Counter />

      <Container>
        <Typography
          variant="h2"
          color="secondary"
          fontWeight={700}
          position={"relative"}
          sx={{ fontSize: 45, zIndex: 1 }}
          lineHeight={2.2}
          mb="2rem"
        >
          How it works!
          <Box
            sx={{
              animation: `${dude} 5s linear infinite`,
              position: "absolute",
              bottom: -9,
              left: -4,
              zIndex: -1,
            }}
          >
            <img
              src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/yellow-bg.png"
              alt=""
              style={{}}
            />
          </Box>
        </Typography>
        <Stack direction="column" gap={1}>
          <Stack direction="row" alignItems="center" gap={1} >
            <AiOutlineThunderbolt style={{fontSize:"24px"}} />
            <Typography variant="h5" fontSize={{xs:16,sm:16,md:"20px"}} >
              An outcome driven intiative that upskills early career
              professionals led by GENIULS expert.
            </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} >
              <AiOutlineBulb style={{fontSize:"24px"}}/>
              <Typography variant="h5" fontSize={{xs:16,sm:16,md:"20px"}}>
                Not a traditional course, Mentorship is provided on case-by-case basis.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} >
              <AiOutlineHeart style={{fontSize:"24px"}} />
              <Typography variant="h5" fontSize={{xs:16,sm:16,md:"20px"}}>
                Assistance till you get placed and beyond!
              </Typography>
            </Stack>
          
        </Stack>
        <Card/>
      </Container>
<Container>
<Typography
          variant="h2"
          color="secondary"
          fontWeight={700}
          position={"relative"}
          sx={{ fontSize: 45, zIndex: 1 }}
          lineHeight={2.2}
          mb="2rem"
        >
          Why Geniuls ?
          <Box
            sx={{
              animation: `${dude} 5s linear infinite`,
              position: "absolute",
              bottom: -9,
              left: -4,
              zIndex: -1,
            }}
          >
            <img
              src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/yellow-bg.png"
              alt=""
              style={{}}
            />
          </Box>
        </Typography>

        <Ups/>
</Container>
<Box>
  <Container>
<Typography
          variant="h2"
          color="secondary"
          fontWeight={700}
          position={"relative"}
          sx={{ fontSize: 45, zIndex: 1 }}
          lineHeight={2.2}
          mb="2rem"
        >
          Our Alumi's 
          <Box
            sx={{
              animation: `${dude} 5s linear infinite`,
              position: "absolute",
              bottom: -9,
              left: -4,
              zIndex: -1,
            }}
          >
            <img
              src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/yellow-bg.png"
              alt=""
              style={{}}
            />
          </Box>
        </Typography>
        </Container>
      
<Alumni/>
</Box>

<ScrollToTop symbol={"🡩"} symbolColor="#0d6efd" strokeFillColor="#0d6efd" bgColor="white"/>
<Button
      className="to-top-progress"
      style={{
        position: 'fixed',
        bottom: 15,
        right: 15,
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 0.3s linear 0s, opacity 0.3s linear 0s',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <SvgIcon
        width={40}
        height={40}
        viewBox="0 0 40 40"
        focusable="false"
        style={{ display: 'block', transform: 'rotate(-90deg)' }}
        stroke="#0d6efd" // Add the strokeFill color here
      >
       

      </SvgIcon>
    </Button>

 <Fcomp/> 

 {/* <Animation/> */}
 

      <Footer />
    </>
  );
};

export default Homepage;
