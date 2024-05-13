
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
                <div>
                    <img src={verifiedEmail} alt='success_img' />
                    <Typography>
                        Email Verified Successfully
                    </Typography>
                    <NavLink to='/login'>
                        <Button color='primary' variant='contained'>
                            Login
                        </Button>
                    </NavLink>
                </div>
            ) : (
                <div>
                    <Typography variant="h1">
                        404 - Not Found
                    </Typography>
                </div>
            )}
        </>
    );
};


export default EmailVerification;

// import React from 'react';
// import { Button, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';

// const EmailVerification = () => {
//     const { emailToken } = useParams();

//     const handleVerifyEmail = async () => {
//         try {
//             let response = await fetch(`http://localhost:8000/api/auth/verifyEmail`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ emailToken })
//             });
//             const data = await response.json();
//             if (data.success) {
//                 // Email verified successfully
//                 // You can provide feedback to the user here
//                 console.log('Email verified successfully');
//             } else {
//                 // Email verification failed
//                 // You can provide feedback to the user here
//                 console.error('Email verification failed');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <Typography variant="h1">Email Verification</Typography>
//             <Button onClick={handleVerifyEmail} variant="contained" color="primary">
//                 Verify Email
//             </Button>
//         </div>
//     );
// };

// export default EmailVerification;


