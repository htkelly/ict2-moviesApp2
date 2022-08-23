import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import DiscoverTvPage from "./pages/discoverTvPage";
import FavouriteTvShowsPage from "./pages/favouriteTvShowsPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import MovieSearchPage from "./pages/movieSearchPage";
import Login from "./components/login/login";
import Register from "./components/register/register";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
            <Route path="/movies/:id" element={<MoviePage/>} />
            <Route path="/movies/:id/similar" element={<SimilarMoviesPage/>} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
            <Route path="/movies/search" element={<MovieSearchPage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/actors/:id" element={<ActorDetailsPage/>} />
            <Route path="/tv" element={<DiscoverTvPage/>} />
            <Route path="/tv/favourites" element={<FavouriteTvShowsPage/>} />
            <Route path="/tv/:id" element={<TvShowDetailsPage/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));