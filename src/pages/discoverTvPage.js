import React from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import AddToTvFavouritesIcon from "../components/cardIcons/addToTvFavourites";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTvShows} from '../api/tmdb-api';
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


const DiscoverTvPage = (props) => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = React.useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['discoverTv', {pageNumber: pageNumber}], getTvShows);
  const handlePageChange = (e, value) => {
    setPageNumber(value);
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;
  
  return (
    <>
      <TvListPageTemplate
        title="Discover TV Shows"
        tvShows={tvShows}
        action={(tvShow) => {
          return <AddToTvFavouritesIcon tvShow={tvShow} />
        }}
      />
      <div className={classes.pagination}>
        <Pagination count={500} variant="outlined" showFirstButton showLastButton page={pageNumber} onChange={handlePageChange}/>
      </div>
    </>
  );
};

export default DiscoverTvPage;