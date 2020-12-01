import React, {Fragment} from 'react';
import {movies} from './movies';

function App() {
    return (
        <div>
            <h1>Movie Information</h1>
            {
                movies.map((movie) => {
                    // some JS logic can go here
                    // React.Fragment is the same as Fragment, but you need to  destructure Fragment from the react import if you use just 'Fragment'
                    // <> and </> can also be used in place of <React.Fragment/> if you don't need to use a key

                    return (
                        <div key={movie.title} style={{backgroundColor: 'cornflowerblue'}}>
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.director}</p>
                            <p>{movie.releaseYear}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;
