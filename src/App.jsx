import { Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import AnimeDetails from "./components/animedetails/AnimeDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />}>
        <Route path="animes/:id" element={<AnimeDetails />} />
      </Route>
    </Routes>
  );
};

export default App;