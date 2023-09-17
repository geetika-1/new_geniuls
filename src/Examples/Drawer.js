import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        
        PaperProps={{
          sx: {width: "40%"}
        }}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <ListItemText>home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton edge="end" onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuRounded marginLeft={"auto"} />
      </IconButton>
    </>
  );
};

export default DrawerComp;
