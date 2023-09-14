import { NavBar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import logo from "../assets/logoTorre.svg";

export const Header = () => {
  return (
    <header className="bg-gray-800 pl-4   flex place-content-between items-center mb-4 sticky top-0">
      <a href="https://torre.ai/" className="flex justify-between items-center text-yellow-500">
        <img
          src={logo}
          className="w-40 rounded-lg mr-3"
          alt="Torre logo"
        />

      </a>
      <div className="flex place-content-between items-center">
        <SearchBar />
        <NavBar />
      </div>
    </header>
  );
};
