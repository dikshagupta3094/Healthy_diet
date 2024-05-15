
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import verifiedEmail from '../assets/verifiedEmail.jpg'; // Adjust the path as needed
import { NavLink} from 'react-router-dom';
import { useParams } from 'react-router';

const EmailVerification = () => {
    const [validUrl, setValidUrl] = useState(false);
    const { emailToken } = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                let response = await fetch(`http://localhost:8000/api/auth/verifyEmail`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ emailToken })
                });
                console.log("EmailToken", emailToken);
                const data = await response.json();
                console.log("Data", data);
                if (data.success) {
                    setValidUrl(true);
                } else {
                    setValidUrl(false);
                }
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };

        verifyEmail();
    }, [emailToken]);

    return (
        <>
            {validUrl ? (
                <div style={{display:"flex", flexDirection:"column",height:"100vh", justifyContent:"center", alignItems:"center"}}>

                <img src={verifiedEmail} alt="success_img" style={{
                    width:"150px",
                    height:"150px",
                }} />
                <Typography variant="h5" marginY={'20px'}>Email Verified Successfully</Typography>
                <NavLink to="/login">
                  <Button color="primary" variant="contained" sx={{
                    padding:"10px"
                  }}>
                    Go to Login
                  </Button>
                </NavLink>
              </div> 
              ) : ( 
              <div>
                 {/* <PageNotFound/> */}
              </div> 
            )}
        </>
    );
};



export default EmailVerification;


