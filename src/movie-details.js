import React from 'react';

const MovieDetails = (props) => {
    const {currentMovie} = props;
    return (
        <div>
            <p>{currentMovie.title}</p>
            <p>{currentMovie.rating}</p>
            <p>{currentMovie.director}</p>
            <p>{currentMovie.releaseYear}</p>
            <p>{currentMovie.description}</p>
            <p>{currentMovie.categories.join(', ')}</p>
            <img src={currentMovie.posterUrl} alt={currentMovie.title}/>
        </div>
    )
};

export default MovieDetails;