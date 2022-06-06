import axios from "axios";
import { useState, useEffect, React } from "react";
import Movie from "./Movie";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";

function Row({ title, fetchURL, rowID }) {
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

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollRight = slider.scrollRight + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <CgArrowLeftO
          onClick={slideRight}
          className=" left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <CgArrowRightO
          onClick={slideRight}
          className=" right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
