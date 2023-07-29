import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import AnimeDetails from "./pages/AnimeDetails";
import Footer from "./components/Footer";
import Top100 from "./pages/Top100";
import Popular from "./pages/Popular";
import Airing from "./pages/Airing";
import Upcoming from "./pages/Upcoming";
import SearchFeed from "./pages/SearchFeed";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App text-white">
      <SkeletonTheme baseColor="#27272A" highlightColor="#3F3F46">
        <ScrollToTop />
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
      </SkeletonTheme>
    </div>
  );
};

export default App;
