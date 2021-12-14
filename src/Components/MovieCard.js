import React from 'react'
import styled from 'styled-components'

const MovieStyled = styled.div`
    width: 20%;
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
            font-size: 0.75em;
            width: 100%;
            height: 100%;
        }
    }
    button {
        align-self: center; 
        padding: 5px 10px;
    }
`;

const MovieCard = ({poster, title, year, buttonTxt}) => {
    return (
        <MovieStyled> 
            <div className='card-poster'>
                {poster === 'N/A' ? (<p className='no-poster'>No poster available</p>) : (<img src={poster} alt=''/>)}
            </div>
            <div className="card-info">
                <h2>{title}</h2>
                <p>{year}</p>
            </div>
            {buttonTxt ? (<button>{buttonTxt}</button>) : (<button>Details</button>) }
        </MovieStyled>
    )
}
export default MovieCard; 