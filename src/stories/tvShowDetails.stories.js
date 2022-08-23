import React from "react";
import TvShowDetails from "../components/tvShowDetails";
import SampleTvShow from "./sampleTvShow";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TV Show Details Page/TvShowDetails",
  component: TvShowDetails,
};

export const Basic = () => <TvShowDetails tvShow={SampleTvShow} />;

Basic.storyName = "Default";
