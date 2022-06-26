import React from "react";
import { useQuery } from 'react-query';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'
import Spinner from '../components/spinner';

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  const addToFavourites = () => null;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} color="primary" />
      }}
    />
  );
};

export default UpcomingMoviesPage;