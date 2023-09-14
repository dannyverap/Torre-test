import burguerMenu from "../assets/icon-menu.svg";

export const NavBar = () => {
  return (
    <>
      <ul className=" hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center text-white">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Popular</a>
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
