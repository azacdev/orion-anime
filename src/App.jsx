import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import AnimeDetails from "./pages/AnimeDetails";
import Footer from "./components/Footer";
import Top100 from "./pages/Top100";
import Popular from "./pages/Popular";
import Airing from "./pages/Airing";
import Upcoming from "./pages/Upcoming";
import SearchFeed from "./pages/SearchFeed";

const App = () => {
  return (
    <div className="App text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="anime/top" element={<Top100 />} />
        <Route path="anime/popular" element={<Popular />} />
        <Route path="anime/upcoming" element={<Upcoming />} />
        <Route path="anime/airing" element={<Airing />} />
        <Route path="animes/:id" element={<AnimeDetails />} />
        <Route path="animes/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
