import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCard from "./Components/MovieCard.js"; 
//icons 
import SearchIcon from '@mui/icons-material/Search';
//logo
import logo from "./images/jmdb.png"; 

//API key from OMDB (should be added as ENV, however, will leave here for now)
const API_KEY = '774611f9';

const MainPage = styled.main`
	padding: 1em; 
	min-height: 100vh;
    background-color: #20232a;
    .main-section {
        color: white;

		.search-bar {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 20px;

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
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState([]); 
	const [noneFound, setNoneFound] = useState(false); 

	//when a user makes a search, append the search and api key to the get
	function handleClick(e) {
		axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
			.then((response) => {
				if(response.data.Response === 'False'){
					//if no movies are found for the query, set the noneFound boolean and clear the movies array
					//console.log(response.data);
					setNoneFound(true); 
					setMovies([]);
				}else{
					//if movies are found then update the movies array and set the boolean false
					setMovies(response.data.Search);
					//console.log(movies);
					setNoneFound(false); 
				}
			}, (error) => {
				//if there is an error with the get log the error message 
				console.log(error);
			});
	}

    return (
        <MainPage>
            <div className="main-section">
				<div className="search-bar">
					<div className="logo">
						<img src={logo} alt="jmdb logo"/>
					</div>
					<input 
						type="search" 
						className="search-field"
						placeholder="Search OMDb..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<div className="search-icon" onClick={handleClick} >
						<SearchIcon />
					</div>
				</div>
				<div className="movies-row">
					{ noneFound && (<h1>No results could be found...</h1>)}
					{movies !== null && movies.map((movie, index) => {
						return(
							<MovieCard key={index}
								poster = {movie.Poster}
								title = {movie.Title}
								year = {movie.Year} 
							/>
						)
					})}
				</div>
            </div>
        </MainPage>
    );
}

export default App;
