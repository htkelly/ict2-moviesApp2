
# ICT Skills 2 Assignment.

Name: Harry Kelly

## Overview.

This is an expanded version of the movies app that features additional API endpoints, components, filtering, searching, and pagination with caching. An attempt was made to implement protected routes with Firebase, but time was insufficient. Full list of features:

+ Additional list pages: Similar Movies, Discover TV Series, Favourite TV series, Search Page
+ Details page for actors and TV series
+ Details pages for movies and tv series include cast lists, with hyperlinking to actor details
+ Static and parameterized URLs
+ New entities: TV series, Actor.
+ Multiple new API endpoints utilised
+ Slider to filter movies/tv series by average rating
+ Fully cached data model
+ Storybook support for some new components
+ All list pages are paginated (with caching)
+ Attempt was made to implement authentication with Firebase, see the dev-firebase-auth branch of this repo
+ Additional Material UI components used such as Pagination and Slider

## Setup requirements.

1. Clone this repo
2. Delete node_modules folder and package-lock.json
3. Run npm install
4. In the project directory, create a .env file with your TMDB API key assigned to REACT_APP_TMDB_KEY and FAST_REFRESH=false
5. Run npm run start

## App Design.

### Routing/Navigation.

Static and paramaterized routes:

+ /movies/:id - detailed information on a specific movie
+ /movies/upcoming - lists movies soon to be shown in cinemas
+ /movies/:id/similar - lists movies similar to the selected id
+ /movies/search - search movies
+ /actors/:id - detailed information on a specific actor
+ /tv - discover TV shows
+ /tv/favourites - list TV shows marked as favourites 
+ /tv/:id - detailed information on a specific TV show

### Views/Pages.

App views shown below (Favourites excluded, as it is identical to the base movies application)

>Lists movies from the Discover endpoint. Filtering on title, genre, and average rating attributes is supported.

![][d1]

>Shows detailed information on a specific movie, with cast list

![][detail]

>Lists TV shows from the Discover endpoint. Filtering on title, genre, and average rating attributes is supported.

![][tv1]

>Show detailed information on a specific TV show, with cast list

![][tvdetail]

> Show detailed information on a specific actor

![][actordetail]

> List movies similar to selected movie ID

![][similar]

> Search movies using a search box

![][search]


### Component catalogue.

Four new stories developed, highlighted below.

![][stories]

## Caching.

Full caching is used in the application, including for all paginated views

+ Discover movies (pagination support)
+ Movie details
+ Movie cast list
+ Discover TV shows (pagination support)
+ TV Show details
+ Tv Show cast list
+ Movie search (pagination support)
+ Actor details
+ Upcoming movies (pagination support)


![][caching]

## Authentication (if relevant).

An attempt was made to implement Firebase authentication but time was insufficient. See the dev-firebase-auth branch of this repo for the partial implementation. This tutorial was used: https://blog.logrocket.com/user-authentication-firebase-react-apps/

## Server-side persistence (if relevant)

Not attempted.

## Additional features (if relevant),

The filter component was updated to allow filtering on average rating, using a slider. A basic search feature using the TMDB search endpoint was also implemented.

## Independent learning (if relevant),

For pagination I consulted the Material UI documentation here:
https://mui.com/material-ui/react-pagination/

Also for pagination, I consulted the React Query documentation here:
https://tanstack.com/query/v4/docs/guides/paginated-queries

For my partially implemented Firebase authenticaiton, I consulted this tutorial:
https://blog.logrocket.com/user-authentication-firebase-react-apps/

I also made extensive use of the TMBD API documentation.

[d1]: ./public/discover1.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png
[tv1]: ./public/tv1.png
[tvdetail]:  ./public/tvdetail.png
[actordetail]: ./public/actordetail.png
[similar]: /public/similar.png
[search]: /public/search.png