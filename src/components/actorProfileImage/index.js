import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    Paper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    img: {
        width: 450
    }
  }));

const ActorProfileImage = ( {actor} ) => {
    const classes = useStyles();
    const image=
        actor.profile_path
          ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
          : `${process.env.PUBLIC_URL}/assets/actor.jpg`
    return (
      <Paper component="div">
         <img src={image} />
      </Paper>
    );
  };
  
  export default ActorProfileImage;