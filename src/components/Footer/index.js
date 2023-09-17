import { Facebook, Pinterest, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Grid,
} from "@mui/material";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
  return (
    <Box sx={{ background: "#0e1133" }}>
      <Container sx={{ pt: 8, px:{xs:2, sm:8} }}>
      <Grid container spacing={{xs:0, sm:0, md:0}} sx={{ flexGrow: 1 }} mt={12}>
  <Grid xs={12} sm={6} md={3}>
  <Grid item>
          <Box>
            <img
              src="https://geniuls.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5f4f8d4f.png&w=384&q=75"
              alt="logo"
              style={{ height: "auto", maxWidth: "115px" }}
              //  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography variant="body1" color="white.main">
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Button
                aria-label="facebook"
                variant="contained"
                sx={{
                  backgroundColor: "#285da1",
                  py: 1,
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    border: "2px solid",
                    borderColor: "#285da1",
                  },
                  transition: "all 0.3s ease-out 0s",
                }}
              >
                <FaFacebookF style={{ fontSize: "20" }} />
              </Button>
              <Button
                aria-label="twitter"
                variant="contained"
                sx={{
                  backgroundColor: "#03a9f4",
                  py: 1,
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    border: "2px solid",
                    borderColor: "#03a9f4",
                    color: "#03a9f4",
                  },
                  transition: "all 0.3s ease-out 0s",
                }}
              >
                <FaTwitter style={{ fontSize: "20" }} />
              </Button>
              <Button
                aria-label="pinterest"
                variant="contained"
                sx={{
                  backgroundColor: "#d2173f",
                  py: 1,
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    border: "2px solid",
                    borderColor: "#d2173f",
                    color: "#d2173f",
                  },
                  transition: "all 0.3s ease-out 0s",
                }}
              >
                <FaPinterestP style={{ fontSize: "20" }} />
              </Button>
            </Stack>
          </Box>
          </Grid>
  </Grid>
  <Grid xs={12} sm={6} md={3}>
  <Grid item>
          <Box>
            <List
              sx={{ color: "info.main" }}
              subheader={
                <ListSubheader
                  component="div"
                  sx={{
                    backgroundColor: "secondary.main",
                    fontSize: 20,
                    color: "white.main",
                    fontWeight:700,
                  }}
                >
                  Company
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Courses" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Events" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Instructors" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Carrer" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Become a teacher" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
          </Grid>
  </Grid>
  <Grid xs={12} sm=
  {6} md={3}>
  <Grid item>
          <Box>
            
            <List
              sx={{ color: "info.main" }}
              subheader={
                <ListSubheader
                  component="div"
                  sx={{
                    backgroundColor: "secondary.main",
                    fontSize: 20,
                    color: "white.main",
                    fontWeight:700,
                  }}
                >
                  Platform
                </ListSubheader>
              }
            >
              <ListItem> <ListItemText primary='Browse Library'/> </ListItem>
              <ListItem><ListItemText primary='Library'/> </ListItem>
              <ListItem><ListItemText primary='Partners'/> </ListItem>
              <ListItem><ListItemText primary='News & Blogs'/> </ListItem>
              <ListItem><ListItemText primary='FAQs'/> </ListItem>
              <ListItem><ListItemText primary='Tutorials'/> </ListItem>
            </List>
          </Box>
          </Grid>
  </Grid>
  <Grid xs={12} sm={6} md={3}>
  <Grid item>
          <Box>
            {/* <Typography variant="h5" color="white.main">
              Suscribe
            </Typography> */}
            <List
              sx={{ color: "info.main" }}
              subheader={
                <ListSubheader
                  component="div"
                  sx={{
                    backgroundColor: "secondary.main",
                    fontSize: 20,
                    color: "white.main",
                    fontWeight:700,
                  }}
                >
                  Suscribe
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText
                  primary="   Get updates on new programs, workshops, the latest developments,
              and community activities, straight to your inbox"
                ></ListItemText>
              </ListItem>
            </List>
          </Box>
          </Grid>
  </Grid>
</Grid>
      </Container>

  
    </Box>



  );
};

export default Footer;
