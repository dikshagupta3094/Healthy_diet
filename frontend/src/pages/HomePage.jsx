// import React from 'react'
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Box, Typography} from '@mui/material';
import '../styles/HomePage.css'
import Banner from '../assets/Banner.jpg'
import Nutritionist from "../assets/Nutritionist.png"
import Dietitian from '../assets/Dietitian.png'
import Synergy from '../assets/Synergy.png'
const HomePage = () => {
  return (
    <>
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <span>Welcome to Diet Dynamo</span><br />
          <h1>Nourish your body,<br /> love your life.</h1>
          <p>Fuel your body with healthy choices and experience sustained energy <br />
           for a life brimming with vitality.</p>
          <Link to="/contact">
            <button>CONTACT US</button>
          </Link>
        </div>
      </div>

      <div className="cardhead">
        <h1>Our Main Areas of Expertise</h1>
        <p>Our team utilizes their expertise to craft personalized plans for weight management,
           athletic performance, and overall well-being. Let&apos;s navigate your health journey together.
           Don&apos;t worry, we got your back!!</p>
      </div>
      
    <Box className='cards' sx={{display:'flex'}}>

    <Card sx={{ minWidth: 265, maxWidth: 300}}>
      <CardContent sx={{}}>
        <Typography 
        sx={{ fontFamily:'"Cormorant Garamond", sans-serif', 
        fontSize: 24 , 
        fontWeight:'700'}} 
        color="#65B741" gutterBottom>
          <div className="icon">
          <img src={Nutritionist} alt="Nutritionist" />
          </div>
          Personal Nutritionists
        </Typography>
        <Typography variant="body2">
        Our registered dietitians craft personalized plans to help you reach your goals, 
        whether it&apos;s weight loss, peak performance, or just healthier eating. Consider
        us your personal cheerleaders!
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 265, maxWidth: 300,}}>
      <CardContent sx={{}}>
      <Typography 
        sx={{ fontFamily:'"Cormorant Garamond", sans-serif', 
        fontSize: 24 ,
        fontWeight:'700'}} 
        color="#65B741" gutterBottom>
          <div className="icon">
          <img src={Dietitian} alt="Nutritionist" />
          </div>
            Dietitian Nutritionists
        </Typography>
        <Typography variant="body2">
        Our registered dietitian nutritionists translate science into practical plans for weight
        management, athletic performance, and overall well-being. Let&apos;s build a healthier you, together.
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 265, maxWidth: 300  }}>
      <CardContent sx={{}}>
      <Typography 
        sx={{ fontFamily:'"Cormorant Garamond", sans-serif', 
        fontSize: 24 , 
        fontWeight:'700'}} 
        color="#65B741" gutterBottom>
          <div className="icon">
          <img src={Synergy} alt="Nutritionist" />
          </div>
          Nutritious Lifecycle
        </Typography>
        <Typography variant="body2">
        Your body&apos;s needs change throughout life. We offer personalized guidance for all ages,
        from building strong bones to maintaining vitality. Let&apos;s fuel your journey, together.
        </Typography>
      </CardContent>
    </Card>
    </Box>


    </Layout>
    </>
  )
}

export default HomePage;