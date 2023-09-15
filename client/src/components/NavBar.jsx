import burguerMenu from "../assets/icon-menu.svg";
import { NavLink , useLocation} from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation()
  return (
    
    <>
   
      <ul className=" hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center text-white">
        
      {
        pathname === "/" 
          ?""
          : null
      }
      <li>
          <NavLink className={`${(pathname==="/")?"text-blue-700":"text-white"}`} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className={`${(pathname==="/favorites")?"text-blue-700":"text-white"}`} to={"/favorites"}>Favorites</NavLink>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
      <img
        src={burguerMenu}
        alt="burguerMenu"
        className="w-10 h-4 cursor-pointer sm:hidden sm:mg-1"
      />
    </>
  );
};
