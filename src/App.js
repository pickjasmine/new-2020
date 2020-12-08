import React from 'react';
import {movies} from './movies';
import MoviePreview from "./movie-preview";
import MovieDetails from "./movie-details";
import './App.css';

function App() {
    const [currentMovie, setCurrentMovie] = React.useState(null);

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Movie Information</h1>
            {
                movies.map((movie) => {
                    return (
                        <MoviePreview
                            key={movie.title}
                            movie={movie}
                            onClickFunction={setCurrentMovie}
                        />
                    )
                })
            }

            {
                currentMovie ?
                    <MovieDetails currentMovie={currentMovie}/>
                    :
                    <p>No movie selected</p>
            }
        </div>
    );
}

export default App;
