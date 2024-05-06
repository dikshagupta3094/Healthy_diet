import React from "react";
import Layout from "../components/Layout";
<<<<<<< HEAD
import Dietitians from "../components/Dietitians";
=======
import { Link } from "react-router-dom";
>>>>>>> f4a1d07af3fdfb4a8881079bb45ef35364e4a91c
import {
  Box,
  Typography
} from "@mui/material";

import Dt1 from "../assets/dt-1.jpg";
import "../styles/OurExpert.css"
const OurExpert = () =>{
return(
    <>
      <Layout>
        <Box
          sx={{
            textAlign: "center",
            fontFamily: "Cormorant Garamond",
            fontStyle: "serif",
            margin: "40px",
          }}
        >
          <Typography variant="h3">Meet Our Experts</Typography>
          <Typography
            variant="body1"
            sx={{ width: "60%", fontSize: "20px", margin: "10px auto 3rem" }}
          >
            We are committed to providing you with personalized guidance on your
            path to a healthier lifestyle. Our team of experienced and
            passionate registered dietitians and certified nutritionists is here
            to help you achieve your individual goals.
          </Typography>
        </Box>
        <div className="dtContainer">
        <Dietitians
        avatar = "R"
        title = "Dt. Silky Mahajan"
        subheader = "Health Coach"
        img = {Dt1}
        description = "Silky Mahajan truly empowers her clients. Her guidance goes beyond just meal plans - she fosters a positive relationship with food, creating a sustainable and healthy lifestyle."
        />

        <Dietitians
        avatar = "R"
        title = "Dt. Silky Mahajan"
        subheader = "Health Coach"
        img = {Dt1}
        description = "Silky Mahajan truly empowers her clients. Her guidance goes beyond just meal plans - she fosters a positive relationship with food, creating a sustainable and healthy lifestyle."
        />

        <Dietitians
        avatar = "R"
        title = "Dt. Silky Mahajan"
        subheader = "Health Coach"
        img = {Dt1}
        description = "Silky Mahajan truly empowers her clients. Her guidance goes beyond just meal plans - she fosters a positive relationship with food, creating a sustainable and healthy lifestyle."
        />

<<<<<<< HEAD
        <Dietitians
        avatar = "R"
        title = "Dt. Silky Mahajan"
        subheader = "Health Coach"
        img = {Dt1}
        description = "Silky Mahajan truly empowers her clients. Her guidance goes beyond just meal plans - she fosters a positive relationship with food, creating a sustainable and healthy lifestyle."
        />

        <Dietitians
        avatar = "R"
        title = "Dt. Silky Mahajan"
        subheader = "Health Coach"
        img = {Dt1}
        description = "Silky Mahajan truly empowers her clients. Her guidance goes beyond just meal plans - she fosters a positive relationship with food, creating a sustainable and healthy lifestyle."
        />
=======
            <Link to = "/PostQuery">
              <Button
                variant="contained"

                sx={{
                  marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"
                  }
                }}
              >
                Post Query
              </Button>
              </Link>
              <Button
                variant="outlined"
                sx={{
                  color: "#65B741", borderColor: "#65B741", "&:hover": {
                    color: "#5a9f3c", borderColor: "#5a9f3c"
                  }
                }}
                aria-describedby={id} onClick={handleClick}
              >
                Know More
              </Button>
>>>>>>> f4a1d07af3fdfb4a8881079bb45ef35364e4a91c

        <Dietitians
        avatar = "R"
        title = "Dt. Silky Mahajan"
        subheader = "Health Coach"
        img = {Dt1}
        description = "Silky Mahajan truly empowers her clients. Her guidance goes beyond just meal plans - she fosters a positive relationship with food, creating a sustainable and healthy lifestyle."
        />

        </div>
                
      </Layout>
    </>
  );
};

export default OurExpert;

