import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (mvObj) => {
    let newWatchlist = [...watchlist, mvObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemoveFromWatchList = (mvObj) => {
    let filteredWatchlist = watchlist.filter((mv) => mv.id != mvObj.id);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
    console.log(filteredWatchlist);
  };

  useEffect(() => {
    let mvsFromLocalStorage = localStorage.getItem("moviesApp");
    if (!mvsFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(mvsFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchlist}
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
