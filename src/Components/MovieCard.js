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
    .button-8:hover,
    .button-8:focus {
    background-color: #b3d3ea;
    color: #2c5777;
    }
    .button-8:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
    }
    .button-8:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
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