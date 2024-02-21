import React, { useEffect, useState } from "react";
import genreids from "../utility/genre.js";

function WatchList({ watchlist, setWatchlist, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let increased = watchlist.sort((mvA, mvB) => {
      return mvA.vote_average - mvB.vote_average;
    });
    setWatchlist([...increased]);
  };

  useEffect(() => {
    let temp = watchlist.map((mvObj) => {
      return genreids[mvObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  let sortDecreasing = () => {
    let decreased = watchlist.sort((mvA, mvB) => {
      return mvB.vote_average - mvA.vote_average;
    });
    setWatchlist([...decreased]);
    console.log(decreased);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 hover:cursor-pointer mt-10">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] outline outline-2 outline-offset-2 rounded-xl text-white font-bold"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-800 rounded-xl text-white font-bold"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex text-white justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search from your watchlist"
          className="h-[3rem] w-[18rem] bg-gray-800 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div
                  onClick={sortIncreasing}
                  className="p-2 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div
                  onClick={sortDecreasing}
                  className="p-2 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((mvObj) => {
                if (currGenre == "All Genres") {
                  return true;
                }
                return genreids[mvObj.genre_ids[0]] == currGenre;
              })
              .filter((mvObj) => {
                return mvObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((mvObj) => {
                return (
                  <tr key={mvObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[10rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${mvObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-10">{mvObj.title}</div>
                    </td>

                    <td>{mvObj.vote_average}</td>
                    <td>{mvObj.popularity}</td>
                    <td>{genreids[mvObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(mvObj)}
                      className="text-red-800 hover:cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
