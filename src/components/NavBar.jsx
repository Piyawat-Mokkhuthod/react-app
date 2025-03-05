import reactLogo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const activityLink = ({ isActive }) =>
    isActive
      ? "bg-blue-700 bg-opacity-50 rounded py-2 px-4"
      : "hover:bg-blue-700 hover:bg-opacity-50 rounded py-2 px-4 delay-25 rounded py-2 px-4 text-white transition-all duration-300 ease-in-out";

  return (
    <header>
      <div className="flex mr-auto p-6 gap-x-2 font-semibold text-2xl sm:text-3xl">
        <Link to="/">
          <img className="sm:h-10 sm:w-10" src={reactLogo} alt="" />
        </Link>
        <span>React: Todo List</span>
      </div>
      <ul className="hidden sm:flex flex-row gap-x-6 absolute right-8 pr-5">
        <li className="navbar">
          <NavLink to="/" className={activityLink}>
            Home
          </NavLink>
        </li>
        <li className="navbar">
          <NavLink to="/about" className={activityLink}>
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
