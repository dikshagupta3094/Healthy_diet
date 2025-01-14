import React from "react";
import {
    Box,
    Typography,
    Button,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    CardMedia,
    Avatar,
    Rating,
    Popover,
    Tooltip
  } from "@mui/material";
  import MessageIcon from '@mui/icons-material/Message';
  import { red } from "@mui/material/colors";
  import PropTypes from 'prop-types'
//   import Dt1 from "../assets/dt-1.jpg";
  import "../styles/OurExpert.css"
  import { Link, NavLink } from "react-router-dom";
  import { useState,useEffect } from "react";

function Dietitians(props){
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {                                                  
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
   
    return(
      <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        margin: "50px auto",
      }}
    >
      <Card  sx={{ minWidth:345, maxWidth: 345, margin: "50px auto" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.avatar}
            </Avatar>
          }
  
          title={props.title}
          subheader={props.subheader}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="Dietitian"
          sx={{ height: "225px" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
    
        <CardActions disableSpacing>
              <NavLink to= {`/postQuery/${props.dietitianId}`}>
              <Button variant="contained"
                sx={{
                  marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"
                  }
                }}
              >
                Post Query
              </Button>
            </NavLink>
            {/* )
          })} */}

         
         {/* })} */}
       
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
  
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
    <Box sx={{ width: "400px", padding: "30px" }}>
      <Typography variant="h6">Specialities:</Typography>
      <Typography paragraph color={"grey"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Labore temporibus ratione facilis dolore exercitationem
        pariatur fugit praesentium illo corrupti accusamus.
      </Typography>
      <Typography variant="h6">Education:</Typography>
      <Typography paragraph color={"grey"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Assumenda cupiditate ex porro, nobis quas iste perspiciatis
        cumque consequatur amet nisi.
      </Typography>
      <Typography variant="h6">Ratings:</Typography>
      <Rating
        name="half-rating"
        defaultValue={4.5}
        precision={0.5}
        readOnly
      />
    </Box>
  </Popover>
  <Tooltip title="Chat">
    <Link to='/chat'><MessageIcon fontSize="large" className="msg-icon" /></Link>
  </Tooltip>
  </CardActions>
  </Card>
  </Box>
    );
  }

  Dietitians.propTypes= {
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    img: PropTypes.element.isRequired,
    description: PropTypes.string.isRequired,
    dietitianId: PropTypes.string.isRequired
  }

  export default Dietitians