import React from 'react'
import { Link } from 'react-router-dom'
// import ErrorPage from '../assets/PageNotFound.jpg'
const VerificationInfo = () => {
  return (
    <div className="home" style={{ backgroundColor:"#65b741"}}>
        <div className="headerContainer" style={{border:"1px solid grey"}}>
          {/* <div className='welcome'>Welcome to Diet Dynamo</div><br /> */}
          <p style={{fontFamily: '"Roboto", sans-serif', fontSize:"8rem", fontWeight:"bold", marginBottom:"0"}}>HELLO</p>
          <p style={{fontFamily: '"Roboto", sans-serif', fontSize:"1rem", fontWeight:"400"}}>EMAIL VERIFICATION</p>
          <p>Hello user thank you for register now please verify your email by just simply click on below button.</p>
          <Link to="/">
            <button style={{width:"fit-content", border:"1px solid grey", padding:"4px 8px"}}>Verify Email</button>
          </Link>
        </div>
      </div>
  )
}

export default VerificationInfo