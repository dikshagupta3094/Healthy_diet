import React from "react";
import Layout from "../components/Layout";
import Dietitians from "../components/Dietitians";
import {
  Box,
  Typography,Button
} from "@mui/material";

import Dt1 from "../assets/dt-1.jpg";
import "../styles/OurExpert.css"
import { useState,useEffect } from "react";
const OurExpert = () =>{

   
  const [dietExpert,setDietExpert] = useState([])
  useEffect(()=>{
     const fetchExpertIds  = async()=>{
       try {
         const response = await fetch('http://localhost:8000/api/auth/getDietExpertId',{
            method:'GET'
         })
         if (!response.ok) {
           throw new Error('Failed to fetch dietitians');
         }
         const data = await response.json()
         console.log(data);
         setDietExpert(data.data)
         console.log("name",dietExpert);
       } catch (error) {
         console.log("Error while fetching expert data",error);
       }
     }
     fetchExpertIds()
  },[])
  
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
          {dietExpert.length>0 && dietExpert.map((dietExpert,index)=>{
            console.log("Creating card",dietExpert._id);
              return(
              <Dietitians
              key={index} // Assuming _id is the unique identifier for each diet expert
              dietitianId={dietExpert._id}
              avatar = "R"
              title = {`Dt.${dietExpert.name}`}
              subheader = "Health Coach"
              img = {Dt1}
              description = "Silky Mahajan truly empowers her clients. Her guidance goes beyond just meal plans - she fosters a positive relationship with food, creating a sustainable and healthy lifestyle."
          />
              )
          })}
          

        {/* <Dietitians
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
        /> */}
{/* 
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
        /> */}

        </div>
                
      </Layout>
    </>
  );
};

export default OurExpert;