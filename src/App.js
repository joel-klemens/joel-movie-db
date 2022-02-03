import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCard from "./Components/MovieCard.js";
//icons
import SearchIcon from "@mui/icons-material/Search";
//logo
import logo from "./images/jmdb.png";

//API key from OMDB
require("dotenv").config();
const API_KEY = process.env.REACT_APP_API_KEY;

const MainPage = styled.main`
    min-height: 100vh;
    background-color: #20232a;
    .main-section {
        color: white;
        .search-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            padding: 1em;
            background-color: #343844;
            .logo {
                img {
                    height: 3em;
                }
            }
            .search-field {
                border-style: solid;
                border-width: medium;
                border-color: white;
                border-width: 2px;
                border-radius: 5px;
                padding: 5px;
                margin: 10px;
                font-size: 1em;
            }
            .search-icon:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }
        .movies-row {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;
            height: 40%;
        }
    }
`;

function App() {
    //search value, returned list of movies and boolean for when no movies are found
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [noneFound, setNoneFound] = useState(false);
    const [favMovies, setFavMovies] = useState([]);

    //when a user makes a search, append the search and api key to the get
    function handleSearch(e) {
        axios
            .get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
            .then(
                (response) => {
                    if (response.data.Response === "False") {
                        //if no movies are found for the query, set the noneFound boolean and clear the movies array
                        //console.log(response.data);
                        setNoneFound(true);
                        setMovies([]);
                    } else {
                        //if movies are found then update the movies array and set the boolean false
                        setMovies(response.data.Search);
                        //console.log(response.data.Search);
                        setNoneFound(false);
                    }
                },
                (error) => {
                    //if there is an error with the get log the error message
                    console.log(error);
                }
            );
        //stop the form submit from reloading the page as we just want to load results on the homepage
        e.preventDefault();
    }

    const addFavMovie = (movie) => {
        const newFavMovieList = [...favMovies, movie];
        setFavMovies(newFavMovieList);
        console.log(newFavMovieList);
    };

    return (
        <MainPage>
            <div className="main-section">
                <div className="search-bar">
                    <div className="logo">
                        <img src={logo} alt="jmdb logo" />
                    </div>
                    <form onSubmit={handleSearch}>
                        <input
                            type="search"
                            className="search-field"
                            placeholder="Search JMDb..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>

                    <div className="search-icon" onClick={handleSearch}>
                        <SearchIcon />
                    </div>
                </div>
                <div className="movies-row">
                    {/* if no results are found then add message to the page, else, add each movie as a movie card element */}
                    {noneFound && <h1>No results could be found...</h1>}
                    {movies !== null
                        ? movies.map((movie) => {
                              return (
                                  // Movie card will display the poster, title, year and a button.
                                  //by default the button will say 'detail' but for fun lets have it indicate
                                  //the type
                                  <MovieCard
                                      key={movie.imdbID}
                                      poster={movie.Poster}
                                      title={movie.Title}
                                      year={movie.Year}
                                      buttonTxt={"Add to Favorites"}
                                      handleFav={() => addFavMovie(movie)}
                                  />
                              );
                          })
                        : null}
                </div>
            </div>
        </MainPage>
    );
}

export default App;
