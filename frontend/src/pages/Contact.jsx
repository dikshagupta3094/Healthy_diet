
import Layout from "../components/Layout";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import '../styles/Contact.css'

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 380,
  height: 220,
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: "center",
  fontFamily: '"Cormorant Garamond", sans-serif',
  fontWeight: 400
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
            padding: "3.5rem 0",
          }}
        >
          <Typography
            variant="h2"
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
            fontWeight: 400,

            "& > :not(style)": {
              m: 1,
              width: 380,
              height: 220,
            },
          }}

        >
          <DemoPaper elevation={5} square={false}>
            <div style={{
              padding: "0 30px 30px",
              color: "#65b741",
            }}>
              <div className="icons">
                <LocationOnIcon fontSize="large" />
              </div>
            </div>
            <Typography fontFamily={'"Cormorant Garamond", sans-serif'} fontSize={'20px'} fontWeight={800} color={'black'}>
              1424 Bridge Avenue Franklin, LA <br />70538
            </Typography>
          </DemoPaper>

          <DemoPaper elevation={5} square={false}><div style={{
            padding: "0 30px 30px",
            color: "#65b741",
          }}>
            <div className="icons"><MailOutlineIcon fontSize="large" /></div>
          </div>
            <Typography fontFamily={'"Cormorant Garamond", sans-serif'} fontSize={'20px'} fontWeight={800} color={'black'}>
              hello@dietdynamo.com <br />
              info@dietdynamo.com
            </Typography>
          </DemoPaper>

          <DemoPaper elevation={5} square={false}><div style={{
            padding: "0 30px 30px",
            color: "#65b741",
          }}>
            <div className="icons"><PhoneInTalkIcon fontSize="large" /></div>
          </div>
            <Typography fontFamily={'"Cormorant Garamond", sans-serif'} fontSize={'20px'} fontWeight={800} color={'black'}>
              +1(314)-345-2233 <br />
              +1(314)-345-4455

            </Typography>
          </DemoPaper>
        </Box>

        <Box>
          <Typography variant="h3" textAlign={'center'} margin={'40px'}>
            Get In Touch
          </Typography>

          <div className="container">
          <div className="map" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.070212392175!2d75.8741300748147!3d22.68843002871601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc29e3c82ef%3A0x39f47fbb92c83277!2sIIPS%20-%20International%20Institute%20of%20Professional%20Studies%2C%20DAVV!5e0!3m2!1sen!2sin!4v1714840243872!5m2!1sen!2sin" 
          width="650" 
          height="500" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">

          </iframe>
          </div>
            <div className="contact-form">
              <Typography
                  variant="h4"
                  textAlign={"center"}
                  marginBottom={"40px"}
              >Write Us</Typography>
              <form 
                  action="mailto:anushasahu0507@gmail.com" 
                  method="post" >
                <div>
                <label htmlFor="name" >           
                  Your Name :</label> <br />
                <input type="text" name="name" autoComplete="off" required />
                </div>
                <div>
                <label htmlFor="email">Your Email Address :</label> <br />
                <input type="text" name="email" autoComplete="off" required /> 
                </div>
                <div>
                <label htmlFor="phone">Your Phone No. :</label> <br />
                <input type="tel" name="phone" autoComplete="off" required />
                </div>
                <div>
                <label htmlFor="subject">Subject :</label> <br />
                <input type="text" name="subject" autoComplete="off" required /> 
                </div>
                <div>
                <label htmlFor="message">Your Message :</label> <br />
                <textarea name="message" placeholder="Write a message.." autoComplete="off" rows="4" cols="60" required></textarea>
                </div>
                <div>
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </Box>


      </Layout>
    </>
  );
};

export default Contact;
