import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const ActorDetails = ( {actor} ) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <Chip label={`Born: ${actor.birthday}`} />
        <Chip label={`Origin: ${actor.place_of_birth}`} />
        <Chip label={`Popularity: ${actor.popularity}`} />
      </Paper>
      </div>
    </>
  );
};
export default  ActorDetails ;