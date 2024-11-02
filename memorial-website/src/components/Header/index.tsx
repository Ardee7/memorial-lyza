import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: "1px solid #e0e0e0", backgroundColor: "transparent" }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "Merriweather, serif",
            color: "#7d2e41",
            textAlign: "center",
          }}
        >
          In Loving Memory Of
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Merriweather, serif",
              color: "#7d2e41",
              textAlign: "center",
            }}
          >
            Lyza Kate Villanueva Lachica
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
