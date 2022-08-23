import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { searchMovies } from '../api/tmdb-api';
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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

const MovieSearchPage = (props) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [pageNumber, setPageNumber] = React.useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['search', {searchQuery: searchQuery, pageNumber: pageNumber}], searchMovies);
  const handlePageChange = (e, value) => {
    setPageNumber(value);
  };
  const handleQueryChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    console.log("search query changed in search page")
    console.log(e.target.value);
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
        title="Search Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <div className={classes.pagination}>
        <TextField id="outlined-basic" label="Search Query" variant="outlined" defaultValue={searchQuery} onChange={handleQueryChange} />
      </div>
      <div className={classes.pagination}>
        <Pagination count={500} variant="outlined" showFirstButton showLastButton page={pageNumber} onChange={handlePageChange}/>
      </div>
    </>
  );
};

export default MovieSearchPage;