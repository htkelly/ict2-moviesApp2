import React from "react";
import { useQuery } from 'react-query';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'
import Spinner from '../components/spinner';
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

const UpcomingMoviesPage = (props) => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = React.useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['upcoming', {pageNumber: pageNumber}], getUpcomingMovies);
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
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />
      <div className={classes.pagination}>
        <Pagination count={500} variant="outlined" showFirstButton showLastButton page={pageNumber} onChange={handlePageChange}/>
      </div>
    </>
  );
};

export default UpcomingMoviesPage;