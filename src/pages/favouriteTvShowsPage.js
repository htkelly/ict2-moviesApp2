import React, { useContext } from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import RemoveFromTvFavouritesIcon from "../components/cardIcons/removeFromTvFavourites";
import Spinner from "../components/spinner";

const FavouriteTvShowsPage = () => {
  const { tvFavourites: tvShowIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteTvShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvShowQueries.find((t) => t.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTvShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <TvListPageTemplate
      title="Favourite Movies"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromTvFavouritesIcon tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvShowsPage;