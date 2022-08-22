import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState([]);
  const [tvFavourites, setTvFavourites] = useState([])
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addToTvFavourites = (tvShow) => {
    if (!tvFavourites.includes(tvShow.id)) {
      let newTvFavourites = [...tvFavourites, tvShow.id];
      setTvFavourites(newTvFavourites);
    }
  };

  const removeFromTvFavourites = (tvShow) => {
    setTvFavourites(tvFavourites.filter((tvId) => tvId !== tvShow.id));
  };

  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
      console.log(newMustWatch);
    }
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        tvFavourites,
        addToFavourites,
        removeFromFavourites,
        addToTvFavourites,
        removeFromTvFavourites,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
