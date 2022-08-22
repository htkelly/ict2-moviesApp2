import React from "react";
import TvCard from "../tvCard";
import Grid from "@material-ui/core/Grid";

const TvShowList = ( {tvShows, action }) => {
  let tvShowCards = tvShows.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvCard key={t.id} tvShow={t} action={action} />
    </Grid>
  ));
  return tvShowCards;
};

export default TvShowList;