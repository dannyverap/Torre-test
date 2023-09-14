import { NavBar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import logo from "../assets/logo.jpeg";

export const Header = () => {
  return (
    <header className="bg-gray-800 pl-4 pt-2 flex place-content-between items-center mb-3">
      <a href="https://torre.ai/" className="flex justify-between items-center text-yellow-500">
        <img
          src={logo}
          className="w-14 h-14 rounded-lg mr-3"
          alt="Torre logo"
        />
        <p>Torre.ai</p>
      </a>
      <div className="flex place-content-between items-center">
        <SearchBar />
        <NavBar />
      </div>
    </header>
  );
};
