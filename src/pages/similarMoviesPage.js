import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getSimilarMovies} from '../api/tmdb-api';
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

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

const SimilarMoviesPage = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [pageNumber, setPageNumber] = React.useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['similar', {id: id, pageNumber: pageNumber}], getSimilarMovies)
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
  
  return (
    <>
      <PageTemplate
        title="Browse Similar Movies"
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

export default SimilarMoviesPage;