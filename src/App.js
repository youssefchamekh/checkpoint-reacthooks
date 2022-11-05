import './App.css';
import MovieCard from './components/MovieCard';
import NewMovie from './components/NewMovie';
import { useState } from "react";
import { useEffect } from 'react';
import MovieDescription from './components/MovieDescription';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=7fc3c2ab045842f5cac237dbed27dfd8";
function App() {
  const submitButton = (titleRef, yearRef, descriptionRef, posterurlRef, ratingRef) => {
    setmovies([...movies, { title: titleRef, year: yearRef, description: descriptionRef, posterUrl: posterurlRef, rating: ratingRef }])

  }
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(json => setmovies(json.results))
      }, [])
      console.log(movies);
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<MovieCard movies={movies}></MovieCard>}></Route>
            <Route path='/addnewmovie' element={<NewMovie submitButton={submitButton}></NewMovie>}>
            </Route>
            <Route path='/movies/:id' element={<MovieDescription movies={movies} />} >
            </Route>
          </Routes>
        </Router>
      </>

    );
  }

export default App;

