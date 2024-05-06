import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
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
import Dt1 from "../assets/dt-1.jpg";
import "../styles/OurExpert.css"


const OurExpert = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            margin: "50px auto",
          }}
        >
          <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }

              title="Dt. Silky Mahajan"
              subheader="Health Coach"
            />
            <CardMedia
              component="img"
              height="194"
              image={Dt1}
              alt="Paella dish"
              sx={{ height: "225px" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Silky Mahajan truly empowers her clients. Her guidance goes
                beyond just meal plans - she fosters a positive relationship
                with food, creating a sustainable and healthy lifestyle.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>

            <Link to = "/PostQuery">
              <Button
                variant="contained"

                sx={{
                  marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"
                  }
                }}
              >
                Post Query
              </Button>
              </Link>
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
                <MessageIcon fontSize="large" className="msg-icon" />
              </Tooltip>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }

              title="Dt. Silky Mahajan"
              subheader="Health Coach"
            />
            <CardMedia
              component="img"
              height="194"
              image={Dt1}
              alt="Paella dish"
              sx={{ height: "225px" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Silky Mahajan truly empowers her clients. Her guidance goes
                beyond just meal plans - she fosters a positive relationship
                with food, creating a sustainable and healthy lifestyle.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              
                <Button
                  variant="contained"
        
                  sx={{ marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"} }}
                >
                  Post Query
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#65B741", borderColor: "#65B741", "&:hover": {
                    color: "#5a9f3c", borderColor: "#5a9f3c"} }}
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
        <Box sx={{width:"400px", padding:"30px"}}>
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
      <MessageIcon fontSize="large" className="msg-icon"/>
      </Tooltip>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }

              title="Dt. Silky Mahajan"
              subheader="Health Coach"
            />
            <CardMedia
              component="img"
              height="194"
              image={Dt1}
              alt="Paella dish"
              sx={{ height: "225px" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Silky Mahajan truly empowers her clients. Her guidance goes
                beyond just meal plans - she fosters a positive relationship
                with food, creating a sustainable and healthy lifestyle.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              
                <Button
                  variant="contained"
        
                  sx={{ marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"} }}
                >
                  Post Query
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#65B741", borderColor: "#65B741", "&:hover": {
                    color: "#5a9f3c", borderColor: "#5a9f3c"} }}
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
        <Box sx={{width:"400px", padding:"30px"}}>
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
      <MessageIcon fontSize="large" className="msg-icon"/>
      </Tooltip>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }

              title="Dt. Silky Mahajan"
              subheader="Health Coach"
            />
            <CardMedia
              component="img"
              height="194"
              image={Dt1}
              alt="Paella dish"
              sx={{ height: "225px" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Silky Mahajan truly empowers her clients. Her guidance goes
                beyond just meal plans - she fosters a positive relationship
                with food, creating a sustainable and healthy lifestyle.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              
                <Button
                  variant="contained"
        
                  sx={{ marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"} }}
                >
                  Post Query
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#65B741", borderColor: "#65B741", "&:hover": {
                    color: "#5a9f3c", borderColor: "#5a9f3c"} }}
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
        <Box sx={{width:"400px", padding:"30px"}}>
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
      <MessageIcon fontSize="large" className="msg-icon"/>
      </Tooltip>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }

              title="Dt. Silky Mahajan"
              subheader="Health Coach"
            />
            <CardMedia
              component="img"
              height="194"
              image={Dt1}
              alt="Paella dish"
              sx={{ height: "225px" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Silky Mahajan truly empowers her clients. Her guidance goes
                beyond just meal plans - she fosters a positive relationship
                with food, creating a sustainable and healthy lifestyle.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              
                <Button
                  variant="contained"
        
                  sx={{ marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"} }}
                >
                  Post Query
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#65B741", borderColor: "#65B741", "&:hover": {
                    color: "#5a9f3c", borderColor: "#5a9f3c"} }}
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
        <Box sx={{width:"400px", padding:"30px"}}>
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
      <MessageIcon fontSize="large" className="msg-icon"/>
      </Tooltip>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }

              title="Dt. Silky Mahajan"
              subheader="Health Coach"
            />
            <CardMedia
              component="img"
              height="194"
              image={Dt1}
              alt="Paella dish"
              sx={{ height: "225px" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Silky Mahajan truly empowers her clients. Her guidance goes
                beyond just meal plans - she fosters a positive relationship
                with food, creating a sustainable and healthy lifestyle.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              
                <Button
                  variant="contained"
        
                  sx={{ marginRight: "6px", bgcolor: "#65B741", "&:hover": {
                    bgcolor: "#5a9f3c"} }}
                >
                  Post Query
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#65B741", borderColor: "#65B741", "&:hover": {
                    color: "#5a9f3c", borderColor: "#5a9f3c"} }}
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
        <Box sx={{width:"400px", padding:"30px"}}>
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
      <MessageIcon fontSize="large" className="msg-icon"/>
      </Tooltip>
            </CardActions>
          </Card>

        </Box>

      </Layout>
    </>
  );
};

export default OurExpert;
