import React, {Fragment} from 'react';
import {movies} from './movies';

// TODO: add the state examples in here

const movieContainerStyles = {
    backgroundColor: '#F2EDEB',
    height: '250px',
    width: '250px',
    margin: '25px',
    padding: '5px',
    boxShadow: '4px 4px 12px #9A8B84',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

function AppBeforeComponents() {
    const [currentMovie, setCurrentMovie] = React.useState(null);

    console.log(currentMovie);

    // Rendering - React.createElement('div');
    // Reconciliation - comparing new to old
    // Commit - paint the DOM - updates what you see in browser

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Movie Information</h1>
            {
                movies.map((movie) => {
                    // some JS logic can go here
                    // React.Fragment is the same as Fragment, but you need to  destructure Fragment from the react import if you use just 'Fragment'
                    // <> and </> can also be used in place of <React.Fragment/> if you don't need to use a key

                    return (
                        <button key={movie.title} style={movieContainerStyles} onClick={() => {
                            setCurrentMovie(movie)
                        }}>
                            <p style={{fontWeight: 'bold'}}>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.director}</p>
                            <p>{movie.releaseYear}</p>
                        </button>
                    )
                })
            }

            {
                currentMovie ?
                    <div>
                        <p>{currentMovie.title}</p>
                        <p>{currentMovie.rating}</p>
                        <p>{currentMovie.director}</p>
                        <p>{currentMovie.releaseYear}</p>
                        <p>{currentMovie.description}</p>
                        <p>{currentMovie.categories.join(', ')}</p>
                        <img src={currentMovie.posterUrl}/>
                    </div>
                    :
                    <p>No movie selected</p>
            }
        </div>
    );
}


//// this is the "old" way to do state with a class counter component
class Counter extends React.Component {
    constructor(props) {
        super(props);

        // the next three lines are you declaring your initial state
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <>
                <p>{this.state.count}</p>
                {/* calling this.setState() is how you update state. You have to pass an object as the value here */}
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>
            </>
        )
    }
}

//// this is the "new" way to do state with a functional counter component using hooks
const Counter = () => {
    // the next line declares your initial state and gives you a variable to represent that value and a function to update that value
    const [count, setCount] = React.useState(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
};

