import axios from "axios";
import { useState, useEffect, React } from "react";
import requests from "../Request";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);

  const getMovies = async () => {
    try {
      const response = await axios.get(requests.requestHorror);
      const data = response.data;
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div></div>;
}

export default Main;
