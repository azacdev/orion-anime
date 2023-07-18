import Sidebar from "../components/Sidebar";
import Home from "../components/Home";

const Feed = () => {

  return (
    <main className="containerWrap sm:grid grid-cols-3 gap-5 py-4">
      <Sidebar/>
      <Home />
    </main>
  );
};

export default Feed;
