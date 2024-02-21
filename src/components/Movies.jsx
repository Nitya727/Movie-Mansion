import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  watchList,
  handleAddToWatchlist,
  handleRemoveFromWatchList,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) setPageNo(1);
    else setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6351f6b2c3ee59fbfd5a9a5373a95d53&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  //console.log(movies)

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-2">
        {movies.map((mvObj) => {
          return (
            <MovieCard
              key={mvObj.id}
              mvObj={mvObj}
              poster_path={mvObj.poster_path}
              name={mvObj.title}
              watchList={watchList}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movies;
