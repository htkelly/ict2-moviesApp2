import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToTvFavouritesIcon = ({ tvShow }) => {
  const context = useContext(MoviesContext);

  const handleAddToTvFavourites = (e) => {
    e.preventDefault();
    context.addToTvFavourites(tvShow);
  };
  return (
    <IconButton aria-label="add to tv favorites" onClick={handleAddToTvFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavouritesIcon;