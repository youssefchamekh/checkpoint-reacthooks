import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    const movies = props.movies
    return (
        <>
            {/* Article */}
            {movies.map((movie) =>
            (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src={movie.posterUrl} />
                        </a>
                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <Link to={`/movies/${movie.id}`}>
                            <h1 className="text-lg">

                                <a className="no-underline hover:underline text-black" >
                                    {movie.title}
                                </a>
         
                            </h1>
                            </Link>
                            <p className="text-grey-darker text-sm">
                                {movie.year}
                            </p>
                        </header>

                        <p className="ml-4 mr-4 text-sm"  >{movie.description}</p>
                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm">
                                    Rating IMDb : {movie.rating}
                                </p>
                            </a>
                        </footer>
                    </article>
                </div>
                
            ))};

        </>
    );
}
export default MovieList
