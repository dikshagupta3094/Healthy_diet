
// import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Whatsapp from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "white", color: "black", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "35px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#65B741",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <Whatsapp />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Diet Dynamo
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
