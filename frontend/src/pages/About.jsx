import React from 'react'
import Layout from '../components/Layout'
import {Typography, Box, Button} from '@mui/material'
import About1 from '../assets/About1.jpeg'
import About2 from '../assets/About2.jpeg'
import "../styles/About.css"


const About = () => {
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "view more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "view less";
          moreText.style.display = "inline";
        }
      }
    return (
    <>
    <Layout>
    <Box
        sx={{
          mb: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4" sx={{color:"#65B741", marginTop: 0}}>About <br />Diet Dynamo</Typography>
        <div className='part1'>
            <img src={About1} className='about1' alt="" />
        <div className='wrapper'>
            <h4>Better Eat, Better Life</h4>
            <h2>If you get Better Nutrition, You Can <br />Enjoy a Healthy Age</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
            </p>
            <p id="more">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt, molestias dolor incidunt nemo 
                sed voluptate libero voluptatem at aliquid ullam dolores maxime nostrum, ipsam voluptas placeat 
                cupiditate. Repellat, laudantium voluptatum, doloribus corporis deserunt eligendi aliquid dicta 
                aperiam maxime necessitatibus excepturi aspernatur perspiciatis in eos quisquam impedit ex assumenda
                et beatae expedita pariatur est libero vel magni! Explicabo eligendi impedit ab odio soluta laborum
                similique quasi fuga laboriosam sunt. Alias blanditiis at aliquid asperiores, et molestias cumque
                distinctio illum sed debitis explicabo, autem cum tempora sit temporibus eligendi quod. 
                Et aspernatur sint libero praesentium adipisci laudantium repellat quae inventore excepturi!
            </p>
            <Button onClick={myFunction} sx={{bgcolor:"#65B741", color:"black"}}>View more</Button>
        </div>
        
        </div>
        <div className='part2'>
        <div className='wrapper'>
            <h4>Sweat now, Smile later.</h4>
            <h2>You won&apos;t regret a Workout, but you might <br />Regret Skipping it</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
            </p>
          
        </div>
            <img src={About2} className='about1' alt="" />
        
        </div>
      </Box>
    </Layout>
    </>
  )
}



export default About