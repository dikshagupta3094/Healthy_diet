import React from 'react'
import { Link } from 'react-router-dom'
// import ErrorPage from '../assets/PageNotFound.jpg'
const PageNotFound = () => {
  return (
    <div className="home" style={{ backgroundColor:"#65b741"}}>
        <div className="headerContainer" style={{border:"1px solid grey"}}>
          {/* <div className='welcome'>Welcome to Diet Dynamo</div><br /> */}
          <p style={{fontFamily: '"Roboto", sans-serif', fontSize:"8rem", fontWeight:"bold", marginBottom:"0"}}>OOPS!</p>
          <p style={{fontFamily: '"Roboto", sans-serif', fontSize:"1rem", fontWeight:"400"}}>404 - Page Not Found</p>
          <p>The page you are looking for might have been removed, has its name changed or is unavailable.</p>
          <Link to="/">
            <button style={{width:"fit-content", border:"1px solid grey", padding:"4px 8px"}}>Go Back To Home Page</button>
          </Link>
        </div>
      </div>
  )
}

export default PageNotFound