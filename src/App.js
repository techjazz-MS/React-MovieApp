import React, { useState, useEffect } from 'react';
import './App.css';

/** Import Components */
import Movie from './components/Movie/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0ccd0ebc50eaf2ff41fa1c4d0798fe6d&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=0ccd0ebc50eaf2ff41fa1c4d0798fe6d&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);    
  }, []);

  const getMovies = (API) => {
      fetch(API)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }


  return (
    <>
      <header>
        <h2><i class="fas fa-video"></i> React Movie App</h2>
        <ul>
          
        </ul>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" value={searchTerm} onChange={handleOnChange} placeholder="Search..." ></input>
        </form>        
      </header>
      <div className="movie-container"> 
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
