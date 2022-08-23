import React from "react";
import { useQuery } from "react-query";
import { getTvShow } from '../api/tmdb-api'
import { useParams } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import TemplateTvShowPage from "../components/templateTvShowPage";
import Spinner from '../components/spinner';

const TvShowDetailsPage = () => {
  const { id } = useParams();
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: id }],
    getTvShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  return (
    <>
      {tvShow ? (
        <>
          <TemplateTvShowPage tvShow={tvShow}>
            <TvShowDetails tvShow={tvShow} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
              <TvShowCastList />
            </Grid>
          </TemplateTvShowPage>
        </>
      ) : (
        <p>Waiting for TV show details</p>
      )}
    </>
  );
};

export default TvShowDetailsPage;