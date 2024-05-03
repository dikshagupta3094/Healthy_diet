// import React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 350,
  height: 250,
  padding: theme.spacing(5),
  ...theme.typography.body2,
  textAlign: "center",
  fontFamily: '"Cormorant Garamond", sans-serif',
  fontWeight:400
}));

const Contact = () => {
  return (
    <>
      <Layout>
        <div
          style={{
            backgroundColor: "#EEF5FF",
            textAlign: "center",
            margin: "0 auto",
            padding: "6rem 0",
          }}
        >
          <Typography
            variant="h1"
            fontFamily={'"Cormorant Garamond", sans-serif'}
            fontWeight={400}
          >
            Contact Us
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            margin: "30px auto",
          }}
        >
          <Typography
            variant="h3"
            fontFamily={'"Cormorant Garamond", sans-serif'}
            fontWeight={400}
          >
            Contact Us, We Are Here to Help <br />
            You
          </Typography>
          <Typography p marginY={8}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            dolorem voluptatem recusandae natus illum quibusdam nostrum <br />
            ullam officia quaerat amet saepe expedita odit debitis voluptas aut
            suscipit obcaecati tenetur ab.
          </Typography>
        </div>
        
        <Box
          sx={{
              marginBottom: "35px",
              display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            fontFamily: '"Cormorant Garamond", sans-serif',
            fontWeight:400,

            "& > :not(style)": {
              m: 1,
              width: 350,
              height: 250,
            },
          }}
        >
        <DemoPaper elevation={5} square={false}>
            <div style={{
                padding:"30px",
                color:"#65b741",
            }}>
                <LocationOnIcon fontSize="large"/>
            </div>
            <Typography fontStyle={"sans-serif"} fontSize={"18px"}>
            1424 Bridge Avenue Franklin, LA <br />70538
            </Typography>
        </DemoPaper>

        <DemoPaper elevation={5} square={false}><div style={{
                padding:"30px",
                color:"#65b741",
            }}>
                <MailOutlineIcon fontSize="large"/>
            </div>
            <Typography fontStyle={"sans-serif"} fontSize={"18px"}>
            hello@dietdynamo.com <br />
            info@dietdynamo.com
            </Typography>
        </DemoPaper>

        <DemoPaper elevation={5} square={false}><div style={{
                padding:"30px",
                color:"#65b741",
            }}>
                <PhoneInTalkIcon fontSize="large"/>
            </div>
            <Typography fontStyle={"sans-serif"} fontSize={"18px"}>
            +1(314)-345-2233 <br />
            +1(314)-345-4455

            </Typography>
        </DemoPaper>
    
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
