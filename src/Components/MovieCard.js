import React from 'react'
import styled from 'styled-components'

const MovieStyled = styled.div`
    width: 18%;
    height: 20%;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    .card-poster {
        display: flex; 
        justify-content: center;
        img {
            width: 100%; 
        }
        .no-poster {
            margin: 10px;
            font-size: 0.75em;
            width: 100%;
            height: 100%;
        }
    }
    button {
        align-self: center; 
        padding: 3px 6px;
        background-color: #e1ecf4;
        border-radius: 3px;
        border: 1px solid #7aa7c7;
        box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
        box-sizing: border-box;
        color: #39739d;
        cursor: pointer;
    }
`;

const MovieCard = ({poster, title, year, buttonTxt, handleFav}) => {
    return (
        <MovieStyled> 
            <div className='card-poster'>
                {poster === 'N/A' ? (<p className='no-poster'>No poster available</p>) : (<img src={poster} alt={title}/>)}
            </div>
            <div className="card-info">
                <h2>{title}</h2>
                <p>{year}</p>
            </div>
            {buttonTxt ? (<button onClick={handleFav}>{buttonTxt}</button>) : (<button>Details</button>) }
        </MovieStyled>
    )
}
export default MovieCard; 