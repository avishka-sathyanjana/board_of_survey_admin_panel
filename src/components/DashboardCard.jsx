import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from 'prop-types';


function DashboardCard(props) {
    return (
        <Card
        sx={{
          //add margin top and bottom
          margin: 2,

          minWidth: 500,
          maxWidth: 700,

          //add shadow
          boxShadow: 4,
          //add fade shadow

          
        }}
      >
        <CardActionArea
            sx={
                {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }
            
            }>
          <CardMedia
            component="img"
            image={props.addUserImg}
            alt={props.imageAlt}
            sx={
                {
                    width: 120,
                    height: 120,
                }
            }
            

          />
          <CardContent
            sx={
             {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
             } 
            }>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Welcome to the Admin Dashboard
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

DashboardCard.propTypes ={
    addUserImg: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default DashboardCard;