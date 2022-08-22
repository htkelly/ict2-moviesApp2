import React from "react";
import ActorHeader from "../headerActor";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorProfileImage from "../actorProfileImage";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplateActorPage = ({ actor, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ActorHeader actor={actor} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <ActorProfileImage actor={actor} />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateActorPage;