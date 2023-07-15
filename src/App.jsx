import { Routes, Route } from "react-router-dom";
import Feed from "./components/feed";
import AnimeDetails from "./components/animedetails/AnimeDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />}>
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Route>
    </Routes>
  );
};

export default App;