import React from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import AddToTvFavouritesIcon from "../components/cardIcons/addToTvFavourites";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTvShows} from '../api/tmdb-api';

const DiscoverTvPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discoverTv', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;
  
  return (
    <TvListPageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToTvFavouritesIcon tvShow={tvShow} />
      }}
    />
  );
};

export default DiscoverTvPage;