// import React from 'react'
import { useState } from 'react'; 
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
import BMI from "../assets/bmi.jpg"


const HomePage = () => {

  const [heightValue, setHeightValue] = useState(''); 
  const [weightValue, setWeightValue] = useState(''); 
  const [bmiValue, setBmiValue] = useState(''); 
  const [bmiMessage, setBmiMessage] = useState(''); 

  const calculateBmi = () => { 
      if (heightValue && weightValue) { 
          const heightInMeters = heightValue / 100; 
          const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
          setBmiValue(bmi); 

          let message = ''; 
          if (bmi < 18.5) { 
              message = 'You are Underweight'; 
          } else if (bmi >= 18.5 && bmi < 25) { 
              message = 'You are Normal weight'; 
          } else if (bmi >= 25 && bmi < 30) { 
              message = 'You are Overweight'; 
          } else { 
              message = 'You are Obese'; 
          } 
          setBmiMessage(message); 
      } else { 
          setBmiValue(''); 
          setBmiMessage(''); 
      } 
  }; 


  return (
    <>
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <div className='welcome'>Welcome to Diet Dynamo</div><br />
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

    <Box bgcolor={'#EEF5FF'} paddingBottom={10} marginY={12}>
      <Typography variant="h4" sx={{
        textAlign:'center', 
        fontStyle:'italic', 
        color:"#7C93C3", 
        paddingTop:"5rem",
        fontWeight:700
        }}>Calculate Your Body Mass Index</Typography>
      <Box sx={{display:"flex", justifyContent:"center" ,marginY:"50px"}}>
      <div className="bmi"> 
            <h3>BMI Calculator</h3> 
            <div className="input-container"> 
                <label htmlFor="height">Enter Your Height (cm):</label> <br />
                <input 
                    type="number"
                    id="height"
                    value={heightValue} 
                    onChange={(e) => setHeightValue(e.target.value)} 
                /> 
            </div> 
            <div className="input-container"> 
                <label htmlFor="weight">Enter Your Weight (kg):</label> <br />
                <input 
                    type="number"
                    id="weight"
                    value={weightValue} 
                    onChange={(e) => setWeightValue(e.target.value)} 
                /> 
            </div> 
            <button className="calculate-btn" onClick={calculateBmi}> 
                Click to Calculate BMI 
            </button> 
            {bmiValue && bmiMessage && ( 
              <div className="result"> 
                    <p> 
                        Your BMI: <span className="bmi-value">{bmiValue}</span> 
                    </p> 
                    <p> 
                        Result: <span className="bmi-message">{bmiMessage}</span> 
                    </p> 
                </div> 
            )} 
        </div> 
      <div className='bmi-image'>
         <img src={BMI} alt="measurement" width={250} height={250}/>
        </div>
      </Box>
    </Box>

    </Layout>
    </>
  )
}

export default HomePage;