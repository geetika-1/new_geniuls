import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import Styles from "../App.module.css";

const Fcomp = () => {
  return (
    <>
      <Container sx={{ position: "relative", mb: -15, mt: 2, zIndex: 1 }}>
        <Box
          sx={{
            backgroundColor: "#2b4eff",
            padding: {xs:"50px 60px 53px 50px",sm:"50px 100px 53px 70px", md:"50px 100px 53px 70px"},
            borderRadius: "10px",
            boxShadow: " 0px 30px 60px 0px rgba(0, 4, 48, 0.3)",
            position: "relative",
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <Box>
            <img
              className={Styles.img4}
              src="https://bdevs.net/wp/educal/wp-content/uploads/2021/09/cta-shape.png"
              style={{
                position: "absolute",
                height: "auto",
                maxWidth: "100%",
                bottom: "-48px",
                right: "-148px",
                zIndex: 1,
              }}
            />

            {/* </CardMedia> */}
          </Box>
          <Box display={"flex"}>
            <Box sx={{ zIndex: 1 }}>
              <Typography variant="h3" sx={{fontSize:{xs:25, sm:35, md:55}}} color={"#ffff"} fontWeight={700}>
                You can be your own Guiding star with our help
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Fcomp;
