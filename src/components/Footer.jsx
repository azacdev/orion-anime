import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiMyanimelist } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer py-8 bg-[#0D0D0F] w-full px-4">
      <div className="containerWrap flex flex-col sm:flex-row justify-between items-center text-center sm:text-start">
        <div className="flex flex-col gap-4 capitalize">
          <div>
            <h1 className="uppercase text-2xl font-black">Orion Anime</h1>
          </div>

          <div className="text-sm text-zinc-400">
            <p>Feel free to send any feedback</p>
          </div>

          <div className="text-sm text-zinc-400">
            <p>All anime data is provided by unofficial My Anime List API</p>
          </div>

          <div className="flex flex-row justify-center sm:justify-start gap-5">
            <a href="https://myanimelist.net/">
              <SiMyanimelist className="text-2xl" />
            </a>
            <a href="https://github.com/azacdev/orion-anime">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://jikan.moe/">
              <span className="bg-zinc-400 px-2.5 py-1 text-zinc-950 font-bold rounded-sm hover:bg-zinc-50 hover:scale-105 duration-300 easy-in-out transition">
                j
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col mt-4 sm:mt-0 sm:flex-row">
          <div className="flex flex-col gap-1 sm:mr-32">
            <h1 className="uppercase text-lg">Pages</h1>
            <Link to="/">
              <p className="text-sm text-zinc-400 hover:underline">Home</p>
            </Link>
            <Link to="/">
              <p className="text-sm text-zinc-400 hover:underline">Profiles</p>
            </Link>
            <Link to="/">
              <p className="text-sm text-zinc-400 hover:underline">Search</p>
            </Link>
            <Link to="/">
              <p className="text-sm text-zinc-400 hover:underline">Sign-up</p>
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="uppercase text-lg">Search anime</h1>
            <Link
              to="/anime/top"
              className="text-sm text-zinc-400 hover:underline"
            >
              All anime
            </Link>
            <Link
              to="/anime/upcoming"
              className="text-sm text-zinc-400 hover:underline"
            >
              Upcoming
            </Link>
            <Link
              to="/anime/ongoings"
              className="text-sm text-zinc-400 hover:underline"
            >
              Ongoings
            </Link>
            <Link
              to="/anime/top"
              className="text-sm text-zinc-400 hover:underline"
            >
              Top 100
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
