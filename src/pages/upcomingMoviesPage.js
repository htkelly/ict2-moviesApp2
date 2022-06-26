import React, { useState, useEffect } from "react";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  const addToFavourites = () => null;

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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