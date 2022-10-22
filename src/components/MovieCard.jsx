import React from 'react';
import MovieList from './MovieList';
export default function MovieCard(props) {
    
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <MovieList movies={props.movies}></MovieList>
            </div>
        </div>
    );
}