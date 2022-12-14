import './App.css';
import MovieCard from './components/MovieCard';
import NewMovie from './components/NewMovie';
import { useState } from "react";
import MovieDescription from './components/MovieDescription';
import { BrowserRouter as Router, Switch, Route, Routes, Link, useParams } from "react-router-dom";
import MovieList from './components/MovieList';

function App() {
  const submitButton = (titleRef, yearRef, descriptionRef, posterurlRef, ratingRef) => {
    setmovies([...movies, { title: titleRef, year: yearRef, description: descriptionRef, posterUrl: posterurlRef, rating: ratingRef }])

  }
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "The Green Mile",
      year: "1999",
      description: "Paul, the head guard of a prison, meets an inmate, John, an African American who is accused of murdering two girls. His life changes drastically when he discovers that John has a special gift",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
      rating: "8.6/10",
      embedId: "Bg7epsq0OIQ"
    },
    {
      id: 2,
      title: "Beetlejuice",
      year: "1988",
      description: "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
      posterUrl: "https://flxt.tmsimg.com/assets/p10703_p_v8_ae.jpg",
      rating: "7/10",
      embedId: "ickbVzajrk0"
    },

    {
      id: 3,
      title: "The Shawshank Redemption",
      year: "1994",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      rating: "9.9/10",
      embedId: "6hB3S9bIaco"
    },
  ])
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

