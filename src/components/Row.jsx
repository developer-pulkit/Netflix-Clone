import axios from "axios";
import { useState, useEffect, React } from "react";
import Movie from "./Movie";

function Row({ title, fetchURL }) {
  const [movies, setMovie] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get(fetchURL);
      const data = response.data;
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
