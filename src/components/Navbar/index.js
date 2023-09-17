import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Link,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { Apps, KeyboardArrowDown } from "@mui/icons-material";
import DrawerComp from "../../Examples/Drawer";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch)

  useEffect(() => {
    AOS.init({ duration: 1500, offset: 300, easing: "linear" });
  }, []);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white.main",
          width: "100%",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 99,
          display: "block",
        }}
        data-aos={"fade-down"}
        // data-aos-anchor-placement="top-bottom"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <img
                  src="https://geniuls.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5f4f8d4f.png&w=384&q=75"
                  alt="logo"
                  style={{ height: "auto", maxWidth: "115px" }}
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
              </Link>

              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  justifyContent: "center",
                }}
              >
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ p: 2 }}
                />
                {/* <Button
                  marginLeft={2}
                  startIcon={
                    <Apps
                      sx={{
                        "&:hover": {
                          backgroundColor: "none",
                          color: "primary.main",
                        },
                      }}
                    />
                  }
                  sx={{
                    fontSize: 16,
                    textTransform: "capitalize",
                    fontWeight: 500,
                    color: "secondary.main",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "none",
                      color: "primary.main",
                    },
                  }}
                >
                  catergory
                </Button> */}
              </Box>
            </Box>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs sx={{ textTransform: "capitalize", color: "black" }}>
                  <Tab
                    icon={<KeyboardArrowDown />}
                    iconPosition="end"
                    label="home"
                  />
                  <Tab
                    icon={<KeyboardArrowDown />}
                    iconPosition="end"
                    label="course"
                  />
                  <Tab
                    icon={<KeyboardArrowDown />}
                    iconPosition="end"
                    label="pages"
                  />
                  <Tab
                    icon={<KeyboardArrowDown />}
                    iconPosition="end"
                    label="Blogs"
                  />
                  <Tab
                    icon={<KeyboardArrowDown />}
                    iconPosition="end"
                    label="contact"
                  />
                </Tabs>

                <Button variant="contained">Register</Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
