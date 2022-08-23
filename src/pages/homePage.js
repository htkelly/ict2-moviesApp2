import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getMovies} from '../api/tmdb-api';
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>  ({
  pagination: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1.5),
    margin: 0,
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = React.useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['discover', {pageNumber: pageNumber}], getMovies);
  const handlePageChange = (e, value) => {
    setPageNumber(value);
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = movies.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <div className={classes.pagination}>
        <Pagination count={500} variant="outlined" showFirstButton showLastButton page={pageNumber} onChange={handlePageChange}/>
      </div>
    </>
  );
};

export default HomePage;