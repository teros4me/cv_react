import {useState} from "react";
import App from "./App";

function Privacy() {
  const [searchWord, setSearchWord] = useState("");
  const [movies, setMovies] = useState([]);
  const handleSearch = (e) => {
    setSearchWord(e.target.value);
  };
  const fetchMovies = (movieName) => {
    const searchUrl =
      "http://www.omdbapi.com/?s=" + movieName + "&page=2&apikey=af583a29";
    fetch(searchUrl)
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.Search);
      });
  };
  const movieItems = movies.map((movie) => {
    return (
      <div>
        <img src={movie.Poster} alt="poster" />
        <h3>{movie.Title}</h3>
      </div>
    );
  });
  return (
    <div>
      <h1>Movielist</h1>
      Search: <input type="text" onChange={handleSearch} />
      {/* button blir en funktion som bara avfyras när någon klickar */}
      <button onClick={() => fetchMovies(searchWord)}>Search</button>
      {movieItems}
    </div>
  );
}
export default Privacy;