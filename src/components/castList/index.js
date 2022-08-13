import React from "react";
import CastMemberCard from "../castMemberCard";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { getCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const CastList = ( props ) => {
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(['credits', {id: id}], getCredits)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const credits = data;
  console.log(data);
  
  let castMemberCards = credits.cast.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CastMemberCard key={a.id} actor={a} />
    </Grid>
  ));
  return castMemberCards;
};

export default CastList;